import classes from './comments-grid.module.css'
import CommentItem from './comment-item';

function CommentsGrid(props){
    const { comments } = props;
    
    return (
        <div className={classes.grid}>
            {comments.map(comment => (
                <CommentItem key={comment.id} comment={comment} />
            ))}
        </div>
    );
}

export default CommentsGrid;
