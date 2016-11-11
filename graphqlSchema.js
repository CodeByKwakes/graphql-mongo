import { VenueTC } from './models/venue'
import {EventTC} from './models/event'

// import {GQC} from 'graphql-compose'
import { ComposeStorage } from 'graphql-compose';
const GQC = new ComposeStorage();

GQC.rootQuery().addFields({
  venueById: VenueTC.getResolver('findById'),
  venueByIds: VenueTC.getResolver('findByIds'),
  venueOne: VenueTC.getResolver('findOne'),
  venueMany: VenueTC.getResolver('findMany'),
  venueTotal: VenueTC.getResolver('count'),
  venueConnection: VenueTC.getResolver('connection'),

  eventById: EventTC.getResolver('findById'),
  eventByIds: EventTC.getResolver('findByIds'),
  eventOne: EventTC.getResolver('findOne'),
  eventMany: EventTC.getResolver('findMany'),
  eventTotal: EventTC.getResolver('count'),
  eventConnection: EventTC.getResolver('connection'),
})

GQC.rootMutation().addFields({
  venueCreate: VenueTC.getResolver('createOne'),
  venueUpdateById: VenueTC.getResolver('updateById'),
  venueUpdateOne: VenueTC.getResolver('updateOne'),
  venueUpdateMany: VenueTC.getResolver('updateMany'),
  venueRemoveById: VenueTC.getResolver('removeById'),
  venueRemoveOne: VenueTC.getResolver('removeOne'),
  venueRemoveMany: VenueTC.getResolver('removeMany'),

  eventCreate: EventTC.getResolver('createOne'),
  eventUpdateById: EventTC.getResolver('updateById'),
  eventUpdateOne: EventTC.getResolver('updateOne'),
  eventUpdateMany: EventTC.getResolver('updateMany'),
  eventRemoveById: EventTC.getResolver('removeById'),
  eventRemoveOne: EventTC.getResolver('removeOne'),
  eventRemoveMany: EventTC.getResolver('removeMany'),
})

export const graphqlSchema = GQC.buildSchema();
export default graphqlSchema