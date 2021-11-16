import {Fragment, useState} from 'react';
import MainNavigation from './main-navigation';
import Footer from "./footer";
import SideDrawer from './SideDrawer/SideDrawer';
import classes from './layout.module.css'
import Backdrop from '../modals/backdrop';
import { ToastContainer } from "react-toastify";

function Layout(props) {
    const [sideDrawOpen, setSideDrawOpen] = useState(false);
    
    function drawerToggleClickHandler(){
        return setSideDrawOpen(!sideDrawOpen);
    }
    
    function closeProductModal(){
        setSideDrawOpen(false);
    }

    return (
    <Fragment>
        <MainNavigation drawerClickHandler={drawerToggleClickHandler}/>
        {sideDrawOpen && <SideDrawer />}
        {sideDrawOpen && <Backdrop onCancel={closeProductModal} />}
        <main className={classes.body}>{props.children}</main>
        <Footer/>
        <ToastContainer
                position="top-right"
                autoClose={5000}
                //autoClose={false}
                hideProgressBar={false}
                newestOnTop={false}
                draggable={false}
                pauseOnVisibilityChange
                closeOnClick
                pauseOnHover
                theme="light"
            />
    </Fragment>
    );
}

export default Layout;