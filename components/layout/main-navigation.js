// import Link from 'next/link';
// import Logo from './logo';
// import classes from './main-navigation.module.css';
// import { useSession, signOut } from 'next-auth/client';
// import { useState } from 'react';

// function MainNavigation() {
//     const [session, loading] = useSession();
//     const [isMenuVisible, setMenuVisibility] = useState(false);

//     function logoutHandler(){
//         signOut();
//     }

//     return (
//         <header className={classes.header}>
//             <Link href='/'>
//                 <a><Logo /></a>
//             </Link>
//             <nav>
//                 {!loading && (
//                     <ul>
//                         <li>
//                             {/* <Link href="/posts">Posts</Link> */}
//                             <Link href="/products">Products</Link>
//                             <Link href="/contact">Contact</Link>
//                             {/* <Link href="/profile">Profile</Link>
//                         <Link href="/auth">Login</Link> */}
//                             {session && <Link href="/profile">Profile</Link>}
//                             {session && <Link href="" onClick={logoutHandler}>Logout</Link>}
//                         </li>
//                     </ul>
//                 )}
//             </nav>
//         </header>
//     );
// }

// export default MainNavigation;

import Link from 'next/link';
import Logo from './logo';
import DrawerToggleButton from './SideDrawer/DrawerToggleButton';
import classes from './main-navigation.module.css';
import { useSession, signOut } from 'next-auth/client';
import { useState } from 'react';

function MainNavigation(props) {
    const [session, loading] = useSession();
    const [isMenuVisible, setMenuVisibility] = useState(false);

    function logoutHandler() {
        signOut();
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
                                    <Link href="" onClick={logoutHandler}>Logout</Link>
                                </li>}
                            </ul>
                        </div>
                    </div>


                )}
            </nav>
        </header>
    );
}

export default MainNavigation;