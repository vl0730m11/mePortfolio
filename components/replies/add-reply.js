import classes from './add-reply.module.css'
import { useState } from 'react';

function AddReply(props) {
    const [enteredName, setEnteredName] = useState('');
    const [enteredContent, setEnteredContent] = useState('');

    function clearReplyHandler() {
        setEnteredName("");
        setEnteredContent("");
    }

    function addReplyHandler(event) {
        event.preventDefault();
        console.log("clicked!");
        let localTime = new Date();
        
        let replyData = {
            action: 'add',
            commentId: 0,
            name: enteredName,
            content: enteredContent,
            createdDate: localTime.toLocaleString(undefined, { timeZone: "Australia/Sydney" })
        }

        props.onAddReply(replyData);
        clearReplyHandler();
    }

    return (
        <div className={classes.container}>
            <form onSubmit={addReplyHandler}>
                <div className={classes.control}>
                    <label htmlFor='name'>Name</label>
                    <input type='text' id='name' placeholder="Name" required value={enteredName} onChange={event => setEnteredName(event.target.value)} />
                </div>
                <div className={classes.control}>
                    <label htmlFor='content'>Content</label>
                    <textarea type='text' id='content' placeholder="Reply" required value={enteredContent} onChange={event => setEnteredContent(event.target.value)} />
                </div>
                <div className={classes.container_reply_btn}>
                    <button className={classes.add_new_btn}>Add</button>
                </div>
            </form>
        </div>
    );
}

export default AddReply;