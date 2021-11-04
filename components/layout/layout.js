import {Fragment} from 'react';
import MainNavigation from './main-navigation';
import Footer from "./footer";
import classes from './layout.module.css'

function Layout(props) {
    return (
    <Fragment>
        <MainNavigation/>
        <main className={classes.body}>{props.children}</main>
        <Footer/>
    </Fragment>
    );
}

export default Layout;