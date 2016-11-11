import express from 'express';
import cors from 'cors'
import graphqlHTTP from 'express-graphql';
import mongoose from 'mongoose';
import graphqlSchema from './graphqlSchema'

const GRAPHQL_PORT = 8080;
const graphQLServer = express()
graphQLServer.use(cors())

graphQLServer.use('/spont', graphqlHTTP({
  graphiql: true,
  pretty: true,
  schema: graphqlSchema
}));

mongoose.connect('mongodb://localhost/spontDB');

graphQLServer.listen(GRAPHQL_PORT, () => console.log(
  `GraphQL Server is now running on http://localhost:${GRAPHQL_PORT}/spont`
));