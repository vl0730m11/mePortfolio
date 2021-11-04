import classes from './footer.module.css';

function Footer(){
    return (
        <header className={classes.footer}>
            <p>Copyright 2021 @ mePortfolio</p>
            <p>Powered by NextJs 12.0.2 & React 17.0.2</p>
        </header>
    );
}

export default Footer;