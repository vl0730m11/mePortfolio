import ReactMarkdown from 'react-markdown';
import ProductHeader from './product-header';
import Image from 'next/image';

import classes from './product-content.module.css';

//install Markdown: npm install react-markdown
//npm install gray-matter -> read markdown data

function ProductContent(props) {
  const { product } = props;

  const imagePath = `/images/products/${product.image}`;

  const customRenderers = {
    p(paragraph) {
      const { node } = paragraph;

      if (node.children[0].tagName === 'img') {
        const image = node.children[0];

        return (
          <div className={classes.image}>
            <Image
              src={`/images/product/${image.properties.src}`}
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
      <ProductHeader title={product.title} image={imagePath} />
      <ReactMarkdown components={customRenderers}>{product.content}</ReactMarkdown>
    </article>
  );
}

export default ProductContent;