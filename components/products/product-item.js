import Link from 'next/link';
import Image from 'next/image';
import classes from './product-item.module.css'

function ProductItem(props) {
    const { title, image, category, excert, date, slug } = props.product;

    const formattedDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    const imagePath = `/images/products/${image}`;
    const linkPath = `/products/${slug}`;

    return (
        <div className={classes.thumbnail}>
            <Link href={linkPath}>
                <a>
                    <div className={classes.image}>
                        <img src={imagePath} alt={title} style={{ width: '100%' }} />
                    </div>
                </a>
            </Link>
            <div className={classes.category}>
                {category}
            </div>
        </div>
    );
}

export default ProductItem;