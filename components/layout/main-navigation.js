import Link from 'next/link';
import Logo from './logo';
import classes from './main-navigation.module.css';
import { useSession, signOut } from 'next-auth/client';

function MainNavigation() {
    const [session, loading] = useSession();

    function logoutHandler(){
        signOut();
    }

    return (
        <header className={classes.header}>
            <Link href='/'>
                <a><Logo /></a>
            </Link>
            <nav>
                {!loading && (
                    <ul>
                        <li>
                            {/* <Link href="/posts">Posts</Link> */}
                            <Link href="/products">Products</Link>
                            <Link href="/contact">Contact</Link>
                            {/* <Link href="/profile">Profile</Link>
                        <Link href="/auth">Login</Link> */}
                            {session && <Link href="/profile">Profile</Link>}
                            {session && <Link href="" onClick={logoutHandler}>Logout</Link>}
                        </li>
                    </ul>
                )}
            </nav>
        </header>
    );
}

export default MainNavigation;