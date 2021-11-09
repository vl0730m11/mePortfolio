/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      {/* <div className={classes.cover}>
        <Image
          src="/images/Cover.jpg"
          alt="My Cover"
          width={300}
          height={300}
          layout="responsive"
        />
      </div> */}

      <div className={classes.image}>
        <Image
          src="/images/avatar.jpg"
          alt="My Image"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Nathan</h1>
      <h2>a Software Developer & Graphic Designer</h2>
      <p>and... This is my ePortfolio</p>
      <p>Including demontration of my projects & artworks</p>
      <p>Enjoy!</p>
    </section>
  );
}

export default Hero;
