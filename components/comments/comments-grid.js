import classes from './comments-grid.module.css'
import CommentItem from './comment-item';

function CommentsGrid(props){
    const { comments } = props;
    console.log("comments: ", comments);

    return (
        <div>
            {comments.map(comment => (
                <CommentItem key={comment.id} comment={comment} />
            ))}
        </div>
    );
}

export default CommentsGrid;
