/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';

import classes from './hero.module.css';

function Hero() {
    return (
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image src="/images/site/QuadsLogo.jpg" alt="My Image" width={300} height={300}/>
            </div>
            <h1>Hi, I'm Nathan</h1>
            <p>This is my ePortfolio</p>
        </section>
    );
}

export default Hero;