import { useState } from "react";
import AddReply from "../replies/add-reply";
import ReplyItem from "../replies/reply-item";
import classes from "./comment-item.module.css";

const DUMMY_REPLIES = [
  {
    _id: 1,
    commentId: 1,
    name: "Nathan",
    content: "Hello Youi",
    createdDate: "2022-02-10",
  },
  {
    _id: 2,
    commentId: 1,
    name: "Natalie",
    content: "What mixed feelings?",
    createdDate: "2022-02-10",
  },
  {
    _id: 3,
    commentId: 1,
    name: "Nathanio",
    content: "Can you share?",
    createdDate: "2022-02-10",
  },
];

async function sendReplyData(replyDetails) {
  console.log("replyDetails: ", replyDetails);
  const response = await fetch("/api/reply", {
    method: "POST",
    body: JSON.stringify(replyDetails),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();
  console.log("data: ", data);

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong!");
  }
}

function CommentItem(props) {
  const { _id, title, name, content, createdDate, replies } = props.comment;
  const [isShownReplies, setIsShownReplies] = useState(false);
  const [sortedReplies, setSortedReplies] = useState(
    replies.sort((replyA, replyB) =>
      replyA.createdDate < replyB.createdDate ? -1 : 1
    )
  );

  const formattedDate = new Date(createdDate).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  function replyHandler() {
    setIsShownReplies(!isShownReplies);
  }

  function getRandomNumber() {
    const min = 10000;
    const max = 100000000;
    return Math.round(min + Math.random() * (max - min));
  }

  function onAddReply(input) {
    try {
      sendReplyData({
        action: "add",
        commentId: _id,
        name: input.name,
        content: input.content,
        createdDate: input.createdDate,
      });
    } catch (error) {
      console.log("error: ", error);
    }

    let newReply = {
      _id: getRandomNumber(),
      commentId: input.commentId,
      name: input.name,
      content: input.content,
      createdDate: input.createdDate,
    };

    const temp = [...sortedReplies];
    temp.push(newReply);
    //temp.sort((replyA, replyB) => replyA.createdDate > replyB.createdDate ? -1 : 1);
    setSortedReplies(temp);
  }

  return (
    <div className={classes.comment}>
      <h4>{title}. {name}</h4>
      <h6>{formattedDate}</h6>
      <p>{content}</p>
      <div className={classes.container_reply_btn}>
        <button className={classes.reply_btn} onClick={replyHandler}>
          Reply ({sortedReplies.length})
        </button>
      </div>
      {isShownReplies &&
        sortedReplies.map((reply) => (
          <ReplyItem key={reply._id} reply={reply} />
        ))}
      {isShownReplies && <AddReply onAddReply={onAddReply} />}
    </div>
  );
}

export default CommentItem;
