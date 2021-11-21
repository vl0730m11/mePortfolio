import classes from './comments-grid.module.css'
import CommentItem from './comment-item';

function CommentsGrid(props){
    const { comments } = props;
    let sortedComments = comments.sort((commentA, commentB) => commentA.createdDate > commentB.createdDate ? -1 : 1);

    return (
        <div className={classes.grid}>
            {sortedComments.map(comment => (
                <CommentItem key={comment._id} comment={comment} />
            ))}
        </div>
    );
}

export default CommentsGrid;
