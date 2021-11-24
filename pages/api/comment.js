import { connectToDatabase } from '../../lib/db';

//Testttttt
async function handler(req, res) {
    if (req.method === 'POST') {
        const { action } = req.body;
        if (action === 'add') {
            await addComment(req.body, res);
            return;
        }

    }

    // if (req.method === 'GET') {
    //     if (req.query.action === 'getAllComments') {
    //         await getAllComments(res);
    //     }

    // }

    res.status(422).json({ message: 'Action not found!' });
    return;

}

async function addComment(input, res) {
    const { action, title, name, content, createdDate } = input;
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
        createdDate,
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
        .json({ message: 'Successfully stored comment!', comment: newComment });
    return;
}

// async function getAllComments(res) {
//     let result = [];
//     try {
//         const client = await connectToDatabase();
//         const db = client.db();
//         result = await db.collection('comments').find().toArray();
//         console.log("result: ", result);
//         client.close();
//     } catch (error) {
//         console.log(error);
//         client.close();
//         res.status(422).json({ message: 'Something went wrong!', comments: [] });
//         return;
//     }

//     res
//         .status(201)
//         .json({ message: 'Successfully load comments!', comments: result });
//     return;
// }

export default handler;