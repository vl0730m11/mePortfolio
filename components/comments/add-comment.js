import { useState, useCallback } from 'react';
import classes from './add-comment.module.css'
import toast from "../ui/toast";
import "react-toastify/dist/ReactToastify.css";
import Backdrop from '../modals/backdrop';
import { useRouter } from 'next/router';

async function sendCommentData(commentDetails) {
    
    const response = await fetch('/api/comment', {
        method: 'POST',
        body: JSON.stringify(commentDetails),
        headers: {
            'Content-Type': 'application/json',
        }
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'Something went wrong!');
    }
}

function AddComment(props) {
    const [isLoading, setIsLoading] = useState(false);
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredName, setEnteredName] = useState('');
    const [enteredContent, setEnteredContent] = useState('');
    const router = useRouter();

    const notify = useCallback((type, message) => {
        toast({ type, message });
    }, []);

    function getRandomNumber() {
        const min = 10000;
        const max = 100000000;
        return Math.round(min + Math.random() * (max - min));
      }

    async function addCommentHandler(event) {
        event.preventDefault();
        notify("loading", "Submitting Comment, Please wait...");
        setIsLoading(true);

        try {
            let localTime = new Date();
            let newComment = {
                action: 'add',
                _id: getRandomNumber(),
                title: enteredTitle,
                name: enteredName,
                content: enteredContent,
                createdDate: localTime.toLocaleString(undefined, { timeZone: "Australia/Sydney" })
            }

            await sendCommentData(newComment);

            toast.dismiss();
            notify("success", "Success!");
            setIsLoading(false);
            //router.replace('/comment');
            props.onAddComment(newComment);

            setEnteredTitle('');
            setEnteredName('');
            setEnteredContent('');
        } catch (error) {
            //setRequestError(error.message);
            toast.dismiss();
            notify("error", "Error!");
            setIsLoading(false);
        }
    }

    function clearCommentHandler() {
        setEnteredTitle("");
        setEnteredName("");
        setEnteredContent("");
    }

    return (
        <div className={classes.container}>
            <form onSubmit={addCommentHandler}>
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
                        <button className={classes.add_new_btn}>Add New</button>
                    </div>
                </div>
            </form>
            {isLoading && <Backdrop />}
        </div>
    );
}

export default AddComment;