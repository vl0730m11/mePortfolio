import { connectToDatabase } from '../../lib/db';

//Testttttt
async function handler(req, res) {
    if (req.method === 'POST') {
        const { action } = req.body;
        if (action === 'add') {
            await addComment(req.body, res);
        }

    }

    if (req.method === 'GET') {
        if (req.query.action === 'getAllComments') {
            await getAllComments(res);
        }

    }

    res.status(422).json({ message: 'Action not found!' });
    return;

}

async function addComment(input, res) {
    const { action, title, name, content, createDate } = input;
    if (
        !title ||
        !title.trim() === '' ||
        !name ||
        name.trim() === '' ||
        !content ||
        content.trim() === ''
    ) {
        res.status(422).json({ message: 'Invalid input.' });
        return;
    }

    const newComment = {
        title,
        name,
        content,
        createDate,
    };

    try {
        const client = await connectToDatabase();
        const db = client.db();
        const result = await db.collection('comments').insertOne(newComment);
        client.close();
    } catch (error) {
        console.log(error);
        client.close();
    }

    res
        .status(201)
        .json({ message: 'Successfully stored comment!', message: newComment });
}

async function getAllComments(res) {
    let result = [];
    try {
        const client = await connectToDatabase();
        const db = client.db();
        result = await db.collection('comments').find();
        client.close();
    } catch (error) {
        console.log(error);
        res.status(422).json({ message: 'Something went wrong!' });
        client.close();
    }

    res
        .status(201)
        .json({ message: 'Successfully load comments!', comments: result });
}

export default handler;