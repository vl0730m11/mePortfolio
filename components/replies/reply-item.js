import classes from './reply-item.module.css'

function ReplyItem(props) {
    const { _id, commentId, name, content, createdDate } = props.reply;

    return (
        <div className={classes.container}>
            <div className={classes.reply}>
                <h5 className={classes.title}>{name} - {createdDate}</h5>
                <p>{content}</p>
            </div>
        </div>
    );
}

export default ReplyItem;