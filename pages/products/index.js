import Head from 'next/head';
import { Fragment } from 'react';

import AllProducts from "../../components/products/all-products";
import { getAllProducts } from '../../lib/products-util';

function AllProductsPage(props){
  console.log("props: ", props);
    return (
        <Fragment>
          <Head>
            <title>All Products</title>
            <meta
              name='description'
              content='A list of all my projects & artworks'
            />
          </Head>
          <AllProducts products={props.products} />
        </Fragment>
      );
}

export function getStaticProps() {
    const allProducts = getAllProducts();
  
    return {
      props: {
        products: allProducts
      },
      revalidate: 60
    }
  }
  
  export default AllProductsPage;