import {useState} from 'react';
import classes from './comment-item.module.css'

function CommentItem(props){
    const { id, title, name, content, date } = props.comment;

    const formattedDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    function replyHandler(){
        console.log("id: ", id);
    }

    return (
        <div className={classes.comment}>
            <h2>{title}</h2>
            <h6>{name} - {formattedDate}</h6>
            <p>{content}</p>
            <div className={classes.container_reply_btn}>
                <button onClick={replyHandler}>Reply</button>
            </div>
            
        </div>
    );
}

export default CommentItem;