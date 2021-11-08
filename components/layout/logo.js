import classes from './logo.module.css';
import Image from 'next/image';

function Logo() {
    const imagePath = `/images/KurukyWhite.png`;

    return (
        <div className={classes.image}>
            <Image src={imagePath} alt="logo" width="150" height="75" layout="fixed"/>
        </div>
    );
}

export default Logo;