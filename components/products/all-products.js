import classes from './all-products.module.css'
import ProductsGrid from './products-grid';

function AllProducts(props) {
    return (
        <section className ={classes.posts}>
            <h1>All Products</h1>
            <ProductsGrid products={props.products} />
        </section>
    );
}

export default AllProducts;