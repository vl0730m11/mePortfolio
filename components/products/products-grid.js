/* eslint-disable react/jsx-key */
import ProductItem from './product-item';
import classes from './products-grid.module.css'
function ProductsGrid(props) {
    const {products} = props;

    return (
        <ul className={classes.grid}>
            {products.map(product => (
            <ProductItem key={product.slug} product={product} />
            ))}
        </ul>
    );
}

export  default ProductsGrid;