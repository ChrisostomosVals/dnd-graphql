import express from 'express';
import DbConnector from '../database/src/dbConnection'
import { ApolloServer } from 'apollo-server-express';
import { typeDefs, resolvers } from './src/schema'
const PORT = 3000;
const app = express() as any;

const dbConnector = DbConnector.getInstance(process.env.MONGO_URL!)
dbConnector.connect(process.env.MONGO_DATABASE!)
.then((db) => {
    const server = new ApolloServer({typeDefs, resolvers, context: { db }});
    server.start().then(() => {
        server.applyMiddleware({ app, path: "/graphql" });
        app.listen(PORT, () => {
            console.log(`Server is running on localhost:${PORT}`);
        });
    });
})
.catch(err => {
    console.log(err)
})


