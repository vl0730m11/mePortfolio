import Link from 'next/link';
import Logo from './logo';
import DrawerToggleButton from './SideDrawer/DrawerToggleButton';
import classes from './main-navigation.module.css';
import { useSession, signOut } from 'next-auth/client';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { ToastContainer } from "react-toastify";
import toast from "../ui/toast";
import "react-toastify/dist/ReactToastify.css";

function MainNavigation(props) {
    const [session, loading] = useSession();
    const router = useRouter();

    const notify = useCallback((type, message) => {
        toast({ type, message });
    }, []);

    function logoutHandler() {
        signOut();
        notify("success", "Successfully Logged out!");
        router.replace('/');
    }

    return (
        <header className={classes.toolbar}>
            <Link href='/'>
                <a><Logo /></a>
            </Link>
            <nav className={classes.toolbar_navigation}>
                {!loading && (
                    <div>
                        <div className={classes.toolbar_toggle_btn}>
                            <DrawerToggleButton click={props.drawerClickHandler}/>
                        </div>
                        <div className={classes.toolbar_navigation_items}>
                            <ul>
                                <li>
                                    {/* <Link href="/posts">Posts</Link> */}
                                    <Link href="/products">Products</Link>
                                </li>
                                <li>
                                    <Link href="/contact">Contact</Link>
                                </li>
                                {session && <li>
                                    <Link href="/profile">Profile</Link>
                                </li>}
                                {session && <li>
                                    <button onClick={logoutHandler}>Logout</button>
                                </li>}
                            </ul>
                        </div>
                    </div>
                )}
            </nav>

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
        </header>
    );
}

export default MainNavigation;