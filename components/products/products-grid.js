/* eslint-disable react/jsx-key */
import ProductItem from './product-item';
import classes from './products-grid.module.css'
import Masonry from 'react-masonry-css'
import { useState } from 'react';

function ProductsGrid(props) {
    const { products } = props;
    const [count, setCount] = useState(12);
    const step = 12;
    const [displayProducts, setDisplayProducts] = useState(products.slice(0, count));

    const breakpointColumnsObj = {
        default: 4,
        1100: 3,
        700: 2,
        500: 1
    };

    console.log("products.length: ", products.length);
    console.log("displayProducts: ", displayProducts);

    function loadMoreHandler() {
        if (count < products.length) {
            let moreProducts = products.slice(count, ((count + step > products.length) ? products.length : count + step));
            console.log("moreProducts: ", moreProducts);
            setDisplayProducts(displayProducts.concat(moreProducts));
            setCount(count + step);
            console.log("displayProducts: ", displayProducts);
            console.log("count: ", count);
        }
    }

    return (
        <div>
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className={classes.grid}
                columnClassName={classes.grid_column}>
                {displayProducts.map(product => (
                    <ProductItem key={product.slug} product={product} />
                ))}
            </Masonry>
            { count <= products.length && <div className={classes.center}>
                <button className={classes.load_more_btn} onClick={loadMoreHandler}>&#65086; Load More ({count}/{products.length}) &#65086;</button>
            </div>}
        </div>

    );
}

export default ProductsGrid;