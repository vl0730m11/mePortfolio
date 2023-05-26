import { useState, useEffect } from 'react';
import { Fragment } from "react";
import Head from "next/head";
import AllComments from "../components/comments/all-comments";
import { connectToDatabase } from '../lib/db';

async function loadComments() {
    const response = await fetch('/api/comment?action=getAllComments', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'Something went wrong!');
    }

    return data;
}

function CommentPage(props) {
    const [allComments, setAllComments] = useState(props.comments);

    useEffect(() => {
        let mounted = true;

        async function loadCommentsHandler() {
            let data = await loadComments();
            setAllComments(data);
        }
      
        loadCommentsHandler();

        return () => mounted = false;
      }, []);

    return (
        <Fragment>
            <Head>
                <title>Comments</title>
                <meta
                    name="description"
                    content="Comments"
                />
            </Head>
            <AllComments comments={allComments} />
            {/* <AllComments comments={props.comments} /> */}
        </Fragment>
    );
}

export async function getStaticProps() {
    const client = await connectToDatabase();
    const db = client.db();

    //const data = await db.collection('comments').find().toArray();
    const data = await db.collection('comments').aggregate([{
        $lookup: {
                from: "replies",
                localField: "_id",
                foreignField: "commentId",
                as: "replies"
            }
    }]).toArray();
    let allComments = JSON.parse(JSON.stringify(data));
    //const allComments = DUMMY_COMMENTS;

    return {
        props: {
            comments: allComments
        },
        revalidate: 60
    }
}

export default CommentPage;