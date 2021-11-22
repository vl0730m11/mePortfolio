import { Fragment } from "react";
import Head from "next/head";
import AllComments from "../components/comments/all-comments";
// import { connectToDatabase } from '../lib/db';


const DUMMY_COMMENTS = [
    {
        _id: 1,
        title: "Title 1",
        name: "Nathan",
        content: "My first comment, My first comment, My first comment, My first comment, My first comment",
        createdDate: '2022-02-10'
    },
    {
        _id: 2,
        title: "Title 2",
        name: "Nathan",
        content: "My first comment",
        createdDate: '2022-02-10'
    },
    {
        _id: 3,
        title: "Title 3",
        name: "Nathan",
        content: "My first comment",
        createdDate: '2022-02-10'
    },
    {
        _id: 4,
        title: "Title 4",
        name: "Nathan",
        content: "My first comment",
        createdDate: '2022-02-10'
    },
    {
        _id: 5,
        title: "Title 5",
        name: "Nathan",
        content: "My first comment",
        createdDate: '2022-02-10'
    },
];

function CommentPage(props) {

    return (
        <Fragment>
            <Head>
                <title>Comments</title>
                <meta
                    name="description"
                    content="Comments"
                />
            </Head>
            <AllComments comments={props.comments} />
        </Fragment>
    );
}

export async function getStaticProps() {
    // const client = await connectToDatabase();
    // const db = client.db();

    // const data = await db.collection('comments').find().toArray();
    // let allComments = JSON.parse(JSON.stringify(data));
    // console.log("allComments: ", allComments);
    const allComments = DUMMY_COMMENTS;

    return {
        props: {
            comments: allComments
        },
        revalidate: 60
    }
}

export default CommentPage;