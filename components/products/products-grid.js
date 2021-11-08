/* eslint-disable react/jsx-key */
import ProductItem from './product-item';
import classes from './products-grid.module.css'
import Masonry from 'react-masonry-css'

function ProductsGrid(props) {
    const { products } = props;
    const breakpointColumnsObj = {
        default: 4,
        1100: 3,
        700: 2,
        500: 1
      };

    return (
        <Masonry
            breakpointCols={breakpointColumnsObj}
            className={classes.grid}
            columnClassName={classes.grid_column}>
            {products.map(product => (
                <ProductItem key={product.slug} product={product} />
            ))}
        </Masonry>
    );
}

export default ProductsGrid;