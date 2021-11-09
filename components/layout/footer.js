import classes from './footer.module.css';

function Footer(){
    return (
        <footer className={classes.footer}>
            <p>Copyright 2021 @ mePortfolio</p>
            <p>Powered by NextJs 12.0 & React 17.0</p>
        </footer>
    );
}

export default Footer;