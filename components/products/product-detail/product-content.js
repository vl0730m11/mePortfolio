import ReactMarkdown from 'react-markdown';
import ProductHeader from './product-header';
import Image from 'next/image';

import classes from './pproduct-content.module.css';

// const DUMMY_POST = {
//     slug: 'geting-started3',
//     title: 'Getting Started',
//     image: 'getting-started-nextjs.png',
//     date: '2022-02-10',
//     content: '# This a first post' //Markdown syntax
// }

//install Markdown: npm install react-markdown
//npm install gray-matter -> read markdown data

function ProductContent(props) {
  const { product } = props;

  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  const customRenderers = {
    // img(image) {
    //     return (
    //         <Image
    //             src={`/images/posts/${post.slug}/${image.src}`}
    //             alt={image.alt}
    //             width={600}
    //             height={300}
    //         />
    //     );
    // }
    p(paragraph) {
      const { node } = paragraph;

      if (node.children[0].tagName === 'img') {
        const image = node.children[0];

        return (
          <div className={classes.image}>
            <Image
              src={`/images/posts/${post.slug}/${image.properties.src}`}
              alt={image.alt}
              width={600}
              height={300}
            />
          </div>
        );
      }

      return <p>{paragraph.children}</p>;
    }
  };

  return (
    <article className={classes.content}>
      <ProductHeader title={post.title} image={imagePath} />
      <ReactMarkdown components={customRenderers}>{post.content}</ReactMarkdown>
    </article>
  );
}

export default ProductContent;