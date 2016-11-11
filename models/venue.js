import mongoose from 'mongoose'
import composeWithMongoose from 'graphql-compose-mongoose'

import { EventTC } from './event'

export const VenueSchema = new mongoose.Schema({
  venueID: {
    type: Number,
    description: 'ID of Venue of the event'
  },
   eventID: {
    type: [Number],
    description: 'ID of events'
  },
  name: String,
  description: String,
  venueType: [String],
  address: String,
  postTown: String,
  postCode: String,
  phone: [String],
  website: String,
  email: [String],
  musicGenre: [String],
})

export const VenueModel = mongoose.model('Venue', VenueSchema)
export const VenueTC = composeWithMongoose(VenueModel)

VenueTC.addRelation(
  'events',
  () => ({
    resolver: EventTC.getResolver('findMany'),
    args: {
      filter: (source) => ({ eventID: source.eventID }),
      skip: null,
      sort: null,
    },
    projection: { eventID: true }
  })
)