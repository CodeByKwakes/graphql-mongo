import mongoose from 'mongoose'
import composeWithMongoose from 'graphql-compose-mongoose'

export const VenueSchema = new mongoose.Schema({
  name: String,
  description: String
})

export const Venue = mongoose.model('Venue', VenueSchema)
export const VenueTC = composeWithMongoose(Venue)

