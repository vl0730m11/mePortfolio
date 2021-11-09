import ProductsGrid from '../products/products-grid';
import classes from './featured-products.module.css';

function FeaturedProducts(props) {
    return (
        <section className={classes.latest}>
            <h2>Featured Products</h2>
            <ProductsGrid products={props.products}/>
        </section>
    );
}

export default FeaturedProducts;