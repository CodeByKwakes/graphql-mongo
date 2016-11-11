import mongoose from 'mongoose'
import composeWithMongoose from 'graphql-compose-mongoose'

import {VenueTC, Venue} from './venue'

export const EventSchema = new mongoose.Schema({
  eventName: String,
  eventDate: Date,
  startTime: Number,
  endTime: Number,
})

export const Event = mongoose.model('Event', EventSchema)
export const EventTC = composeWithMongoose(Event)

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
