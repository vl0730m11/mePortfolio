import { MongoClient } from 'mongodb';

export async function connectToDatabase() {
    console.log("Connecting to db");
    const uri = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.r1oiz.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;
    console.log("uri: ", uri);
    const client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("DB connected!");

    return client;
}