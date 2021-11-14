import React from 'react';
import classes from './SideDrawer.module.css'
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/client';

function SideDrawer(props) {
    const [session, loading] = useSession();

    function logoutHandler() {
        signOut();
    }
    
    return (
        <nav className={classes.side_drawer}>
            <ul>
                <li>
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
        </nav>
    );
}

export default SideDrawer;