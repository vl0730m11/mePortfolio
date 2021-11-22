import { connectToDatabase } from '../../lib/db';

//Testttttt
async function handler(req, res) {
    if (req.method === 'POST') {
        const { action } = req.body;
        if (action === 'add') {
            await addReply(req.body, res);
        }

    }

    if (req.method === 'GET') {
        if (req.query.action === 'getAllReplies') {
            await getAllReplies(res);
        }

    }

    res.status(422).json({ message: 'Action not found!' });
    return;

}

async function addReply(input, res) {
    const { action, commentId, name, content, createdDate } = input;
    if (
        !name ||
        !name.trim() === '' ||
        !content ||
        content.trim() === '' 
    ) {
        res.status(422).json({ message: 'Invalid input.' });
        return;
    }

    const newReply = {
        commentId,
        name,
        content,
        createdDate,
    };

    try {
        const client = await connectToDatabase();
        const db = client.db();
        const result = await db.collection('replies').insertOne(newReply);
        newReply = result;
        client.close();
    } catch (error) {
        console.log(error);
        client.close();
    }

    res
        .status(201)
        .json({ message: 'Successfully stored reply!', reply: newReply });
}

async function getAllReplies(res) {
    let result = [];
    try {
        const client = await connectToDatabase();
        const db = client.db();
        result = await db.collection('replies').find().toArray();
        console.log("result: ", result);
        client.close();
    } catch (error) {
        console.log(error);
        res.status(422).json({ message: 'Something went wrong!', replies: [] });
        client.close();
    }

    res
        .status(201)
        .json({ message: 'Successfully load comments!', replies: result });
}

export default handler;