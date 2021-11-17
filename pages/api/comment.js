import { connectToDatabase } from '../../lib/db';

//Testttttt
async function handler(req, res) {
    if (req.method === 'POST') {
        const { action, title, name, content, createDate } = req.body;
        if (action === 'add') {
            await addComment(req.body);
        }

    }

    res.status(422).json({ message: 'Action not found!' });
    return;

}

async function addComment(input) {
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
        .json({ message: 'Successfully stored message!', message: newComment });
}

export default handler;