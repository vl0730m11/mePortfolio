import { Fragment } from "react";
import Head from "next/head";
import AllComments from "../components/comments/all-comments";

const DUMMY_COMMENTS = [
    {
        id: 1,
        title: "Title 1",
        name: "Nathan",
        content: "My first comment, My first comment, My first comment, My first comment, My first comment",
        date: '2022-02-10'
    },
    {
        id: 2,
        title: "Title 2",
        name: "Nathan",
        content: "My first comment",
        date: '2022-02-10'
    },
    {
        id: 3,
        title: "Title 3",
        name: "Nathan",
        content: "My first comment",
        date: '2022-02-10'
    },
    {
        id: 4,
        title: "Title 4",
        name: "Nathan",
        content: "My first comment",
        date: '2022-02-10'
    },
    {
        id: 5,
        title: "Title 5",
        name: "Nathan",
        content: "My first comment",
        date: '2022-02-10'
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
    const response = await fetch('http://localhost:3000/api/comment?action=getAllComments', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    });

    const data = await response.json();
    console.log("data: ", data);
    // if (!response.ok) {
    //     throw new Error(data.message || 'Something went wronggggg!');
    // }

    const allComments = [];

    if (response.ok) {
        allComments = data;
    }

    return {
        props: {
            comments: allComments
        },
        revalidate: 60
    }
}

export default CommentPage;