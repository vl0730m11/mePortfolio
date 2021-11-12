import React from 'react';
import classes from './SideDrawer.module.css'
import Link from 'next/link';

function SideDrawer(props) {
    return (
        <nav className={classes.side_drawer}>
            <ul>
                <li>
                    <Link href="/products">Products</Link>
                </li>
                <li>
                    <Link href="/contact">Contact</Link>
                </li>
                <li>
                    <Link href="/profile">Profile</Link>
                </li>
                <li>
                    <Link href="#">Logout</Link>
                </li>
            </ul>
        </nav>
    );
}

export default SideDrawer;