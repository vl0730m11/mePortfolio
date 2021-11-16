import classes from './all-comments.module.css'
import CommentsGrid from './comments-grid';

function AllComments(props){
    console.log("props: ", props);
    return (
        <section className ={classes.posts}>
            <h1>All Comments</h1>
            <CommentsGrid comments={props.comments} />
        </section>
    );
}

export default AllComments;