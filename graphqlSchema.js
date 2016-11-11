import { VenueTC } from './models/venue'

import {GQC} from 'graphql-compose'


GQC.rootQuery().addFields({
  venueById: VenueTC.getResolver('findById'),
  venueByIds: VenueTC.getResolver('findByIds'),
  venueOne: VenueTC.getResolver('findOne'),
  venueMany: VenueTC.getResolver('findMany'),
  venueTotal: VenueTC.getResolver('count'),
  venueConnection: VenueTC.getResolver('connection'),
})

GQC.rootMutation().addFields({
  venueCreate: VenueTC.getResolver('createOne'),
  venueUpdateById: VenueTC.getResolver('updateById'),
  venueUpdateOne: VenueTC.getResolver('updateOne'),
  venueUpdateMany: VenueTC.getResolver('updateMany'),
  venueRemoveById: VenueTC.getResolver('removeById'),
  venueRemoveOne: VenueTC.getResolver('removeOne'),
  venueRemoveMany: VenueTC.getResolver('removeMany'),
})

export const graphqlSchema = GQC.buildSchema();
export default graphqlSchema