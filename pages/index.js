import { Fragment } from 'react';
import Head from 'next/head';

import FeaturedProducts from '../components/home-page/featured-products';
import Hero from '../components/home-page/hero';
import { getFeaturedProducts } from '../lib/products-util';

// const DUMMY_POSTS = [
//   { 
//     slug: 'geting-started', 
//     title: 'Getting Started', 
//     image: 'getting-started-nextjs.png', 
//     excert: 'Brand new Post', 
//     date: '2022-02-10' 
//   },
//   { 
//     slug: 'geting-started1', 
//     title: 'Getting Started', 
//     image: 'getting-started-nextjs.png', 
//     excert: 'Brand new Post', 
//     date: '2022-02-10' 
//   },
//   { 
//     slug: 'geting-started2', 
//     title: 'Getting Started', 
//     image: 'getting-started-nextjs.png', 
//     excert: 'Brand new Post', 
//     date: '2022-02-10' 
//   },
//   { 
//     slug: 'geting-started3', 
//     title: 'Getting Started', 
//     image: 'getting-started-nextjs.png', 
//     excert: 'Brand new Post', 
//     date: '2022-02-10' 
//   },
//   { 
//     slug: 'geting-started4', 
//     title: 'Getting Started', 
//     image: 'getting-started-nextjs.png', 
//     excert: 'Brand new Post', 
//     date: '2022-02-10' 
//   },
// ];

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>Nathan</title>
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

