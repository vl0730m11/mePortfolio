import classes from './backdrop.module.css'

function Backdrop(props){
    //props.onClick();
    return <div className={classes.backdrop} onClick={props.onCancel} />;
}

export default Backdrop;