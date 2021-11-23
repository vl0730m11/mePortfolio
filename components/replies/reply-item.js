import classes from './reply-item.module.css'

function ReplyItem(props) {
    const { _id, commentId, name, content, createdDate } = props.reply;

    const formattedDate = new Date(createdDate).toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
      });

    return (
        <div className={classes.container}>
            <div className={classes.reply}>
                <h5 className={classes.title}>{name} - {formattedDate}</h5>
                <p>{content}</p>
            </div>
        </div>
    );
}

export default ReplyItem;