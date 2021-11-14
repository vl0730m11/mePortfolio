import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import classes from './DrawerToogleButton.module.css';
import { FiMenu, FiX } from 'react-icons/fi';

function DrawerToggleButton(props){
    let hamburgerStyles = { 
        color: "white", 
        fontSize: "2em",
        reverseColor: "gray"
         };

    return (
        <button onClick={props.click} className={classes.toogleBtn}>
            <div className={classes.toogleBtn_line}></div>
            <div className={classes.toogleBtn_line}></div>
            <div className={classes.toogleBtn_line}></div>
        </button>
    );
}

export default DrawerToggleButton;