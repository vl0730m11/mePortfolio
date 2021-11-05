import { Fragment } from 'react';
import Head from 'next/head';

import FeaturedPosts from '../components/home-page/featured-posts';
import Hero from '../components/home-page/hero';
import { getFeaturedPosts } from '../lib/posts-util';

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
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts
    },
    revalidate: 60
  }
}

export default HomePage;

