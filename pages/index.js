import { Fragment } from 'react';
import Head from 'next/head';

import FeaturedProducts from '../components/home-page/featured-products';
import Hero from '../components/home-page/hero';
import { getFeaturedProducts } from '../lib/products-util';

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>mePortfolio</title>
        <meta
          name='description'
          content="This is my ePortfolio"
        />
      </Head>
      <Hero />
      <FeaturedProducts products={props.products} />
    </Fragment>
  );
}

export function getStaticProps() {
  const featuredProducts = getFeaturedProducts();

  return {
    props: {
      products: featuredProducts
    },
    revalidate: 60
  }
}

export default HomePage;

