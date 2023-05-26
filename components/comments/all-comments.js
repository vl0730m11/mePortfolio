import classes from './all-comments.module.css'
import CommentsGrid from './comments-grid';
import AddComment from './add-comment';
import { useState } from 'react';

function AllComments(props) {
    const [isAddComment, setIsAddComment] = useState(false);
    const [allComments, setAllComments] = useState(props.comments);

    function addCommentHandler() {
        setIsAddComment(!isAddComment);
    }

    function updateComments(newComment) {
        setIsAddComment(false);
        newComment.replies = [];
        const temp = [...allComments];
        temp.push(newComment);
        setAllComments(temp);
    }

    return (
        <section className={classes.comments}>
            <h1>All Comments</h1>
            <div className={classes.container}>
                <div className={classes.add_comment}>
                    <button onClick={addCommentHandler}>
                        {isAddComment? 'Show Comments' : 'Add Comment'}
                        </button>
                </div>
            </div>
            {isAddComment && <AddComment onAddComment={updateComments}/>}
            {!isAddComment && <CommentsGrid comments={allComments} />}
        </section>
    );
}

export default AllComments;