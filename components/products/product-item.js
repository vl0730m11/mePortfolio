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

    const imagePath = `/images/posts/${slug}/${image}`;
    const linkPath =`/posts/${slug}`;

    return (
        <li className={classes.post}>
            <Link href={linkPath}>
                <a>
                    <div className={classes.image}>
                        <Image src={imagePath} alt={title} width="300" height="200" layout="responsive"/>
                    </div>
                    <div className={classes.content}>
                        <h3>{title}</h3>
                        <time>{formattedDate}</time>
                        <p>{excert}</p>
                    </div>
                </a>
            </Link>
        </li>
    );
}

export default ProductItem;