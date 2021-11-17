import { useState } from 'react';
import classes from './add-comment.module.css'

function AddComment() {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredName, setEnteredName] = useState('');
    const [enteredContent, setEnteredContent] = useState('');

    function addCommentHandler() {
        console.log("Add new Comment");
    }

    function clearCommentHandler() {
        setEnteredTitle("");
        setEnteredName("");
        setEnteredContent("");
    }

    return (
        <div className={classes.container}>
            <div className={classes.comment}>
                <div className={classes.controls}>
                    <div className={classes.control}>
                        <label htmlFor='title'>Title</label>
                        <input type='text' id='title' placeholder="Title" required value={enteredTitle} onChange={event => setEnteredTitle(event.target.value)} />
                    </div>
                    <div className={classes.control}>
                        <label htmlFor='name'>Name</label>
                        <input type='text' id='name' placeholder="Name" required value={enteredName} onChange={event => setEnteredName(event.target.value)} />
                    </div>
                </div>
                <div className={classes.control}>
                    <label htmlFor='content'>Your Message</label>
                    <textarea id='content' rows='3' placeholder="Content" required value={enteredContent} onChange={event => setEnteredContent(event.target.value)} />
                </div>
                <div className={classes.container_reply_btn}>
                    <button className={classes.clear_btn} onClick={clearCommentHandler}>Clear</button>
                    <button className={classes.add_new_btn} onClick={addCommentHandler}>Add New</button>
                </div>
            </div>
        </div>
    );
}

export default AddComment;