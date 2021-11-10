// import { MongoClient } from 'mongodb';
// //Testttttt
// async function handler(req, res) {
//     if (req.method === 'POST') {
//         const { email, name, message, createDate } = req.body;

//         if (
//             !email ||
//             !email.includes('@') ||
//             !name ||
//             name.trim() === '' ||
//             !message ||
//             message.trim() === ''
//         ) {
//             res.status(422).json({ message: 'Invalid input.' });
//             return;
//         }

//         const newMessage = {
//             email,
//             name,
//             message,
//             createDate,
//         };
//         console.log(newMessage);
//         const { MongoClient } = require('mongodb');
//         const uri = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.r1oiz.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;
//         console.log("uri: ", uri);
//         const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: false });

//         // try {
//         //     await client.connect(err => {
//         //         const collection = client.db().collection('messages');
//         //         // perform actions on the collection object
//         //         const result = collection.insertOne(newMessage);
//         //         newMessage.id = result.insertedId;
//         //         console.log(collection);
//         //         client.close();
//         //       });
//         // } catch (error) {
//         //     res.status(500).json({ message: 'Could not connect to database.' });
//         //     return;
//         // }

//         async function insert(client) {
//             try {
//                 console.log("Trying to connect to MongoDB");
//                 await client.connect();
//                 console.log("MongoDB connected");
//                 const database = client.db("mePortfolio");
//                 const msgCollection = database.collection("messages");
//                 const result = await msgCollection.insertOne(newMessage);
//                 newMessage.id = result.insertedId;
//                 console.log("Done");
//             } finally {
//                 await client.close();
//             }
//         }

//         insert(client).catch(console.dir);

//         res
//             .status(201)
//             .json({ message: 'Successfully stored message!', message: newMessage });
//     }
// }

// export default handler;

import { connectToDatabase } from '../../lib/db';

//Testttttt
async function handler(req, res) {
    if (req.method === 'POST') {
        const { email, name, message, createDate } = req.body;

        if (
            !email ||
            !email.includes('@') ||
            !name ||
            name.trim() === '' ||
            !message ||
            message.trim() === ''
        ) {
            res.status(422).json({ message: 'Invalid input.' });
            return;
        }

        const newMessage = {
            email,
            name,
            message,
            createDate,
        };



        try {
            const client = await connectToDatabase();

            const db = client.db();

            const result = await db.collection('messages').insertOne(newMessage);
        } catch (error) {
            console.log(error);
        }

        res
            .status(201)
            .json({ message: 'Successfully stored message!', message: newMessage });
    }
}

export default handler;