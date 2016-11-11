import mongoose from 'mongoose'
import composeWithMongoose from 'graphql-compose-mongoose'

import {VenueTC} from './venue'

export const EventSchema = new mongoose.Schema({
  eventID: {
    type: Number,
    description: 'ID of events of the venue'
  },
  venueID: {
    type: Number,
    description: 'ID of venue'
  },
  eventName: String,
  eventDate: Date,
  startTime: Number,
  endTime: Number,
})

export const EventModel = mongoose.model('Event', EventSchema)
export const EventTC = composeWithMongoose(EventModel)


EventTC.addRelation(
  'venue',
  () => ({
    resolver: VenueTC.getResolver('findOne'),
    args: {
      filter: (source) => ({venueID: source.venueID}),
      skip: null,
      sort: null,
    },
    projection: { venueID: true } 
  })
)
