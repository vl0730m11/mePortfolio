import AllPosts from "../../components/posts/all-posts";
import {getAllPosts} from '../../lib/posts-util';

// const DUMMY_POSTS = [
//     { 
//       slug: 'geting-started', 
//       title: 'Getting Started', 
//       image: 'getting-started-nextjs.png', 
//       excert: 'Brand new Post', 
//       date: '2022-02-10' 
//     },
//     { 
//       slug: 'geting-started1', 
//       title: 'Getting Started', 
//       image: 'getting-started-nextjs.png', 
//       excert: 'Brand new Post', 
//       date: '2022-02-10' 
//     },
//     { 
//       slug: 'geting-started2', 
//       title: 'Getting Started', 
//       image: 'getting-started-nextjs.png', 
//       excert: 'Brand new Post', 
//       date: '2022-02-10' 
//     },
//     { 
//       slug: 'geting-started3', 
//       title: 'Getting Started', 
//       image: 'getting-started-nextjs.png', 
//       excert: 'Brand new Post', 
//       date: '2022-02-10' 
//     },
//     { 
//       slug: 'geting-started4', 
//       title: 'Getting Started', 
//       image: 'getting-started-nextjs.png', 
//       excert: 'Brand new Post', 
//       date: '2022-02-10' 
//     },
//   ];

function AllPostsPage(props){
    return (
        <AllPosts posts={props.posts} />
    );
}

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts
    },
    revalidate: 60
  }
}

export default AllPostsPage;