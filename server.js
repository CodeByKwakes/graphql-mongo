import express from 'express';
import cors from 'cors'
import graphqlHTTP from 'express-graphql';
import mongoose from 'mongoose';
import graphqlSchema from './graphqlSchema'

const server = express()
server.use(cors())

server.use('/spont', graphqlHTTP(req => ({
  schema: graphqlSchema,
  pretty: true
})));

mongoose.connect('mongodb://localhost/spontDB');

server.listen(8080, () => {
  console.log('Listening at port', server.address().port)
})