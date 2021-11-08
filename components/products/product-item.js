import Link from 'next/link';
import Image from 'next/image';
import classes from './product-item.module.css'

function ProductItem(props){
    const { title, image, excert, date, slug } = props.product;

    const formattedDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    const imagePath = `/images/products/${image}`;
    const linkPath =`/products/${slug}`;

    return (
        <div >
            <Link href={linkPath}>
                <a>
                    <div className={classes.image}>
                        <img src={imagePath} alt={title} style={{width:'100%'}}/>
                    </div>
                    {/* <div className={classes.content}>
                        <h3>{title}</h3>
                        <time>{formattedDate}</time>
                        <p>{excert}</p>
                    </div> */}
                </a>
            </Link>
        </div>
    );
}

export default ProductItem;