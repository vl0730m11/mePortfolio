import Image from "next/image";

import classes from './product-header.module.css';

function ProductHeader(props) {
    const {title, image} = props;
    
    return (
        <header className={classes.header}>
            <h1>{title}</h1>
            <Image src={image} alt={title} width={200} height={150}/>
        </header>
    );
}

export default ProductHeader;