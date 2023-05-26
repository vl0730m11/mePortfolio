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
            
            client.close();
        } catch (error) {
            console.log(error);
            client.close();
        }

        res
            .status(201)
            .json({ message: 'Successfully stored message!', message: newMessage });
        return;
    }
}

export default handler;