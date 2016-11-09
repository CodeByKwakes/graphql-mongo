import express from 'express';
import graphqlHTTP from 'express-graphql';
import mongoose from 'mongoose';

const app = express()

app.use('/spont', graphqlHTTP(req => ({
  schema,
  pretty: true
})));

mongoose.connect('mongodb://localhost/spontDB');

const server = app.listen(8080, () => {
  console.log('Listening at port', server.address().port)
})