import {useState} from 'react';
import classes from './comment-item.module.css'

function CommentItem(props){
    const { id, title, name, content, date } = props.comment;

    const formattedDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    return (
        <div>
            <h6>test</h6>
        </div>
    );
}

export default CommentItem;