import Head from 'next/head';
import { Fragment } from 'react';

import ProductContent from "../../components/products/product-detail/product-content";
import { getProductData, getProductsFiles } from '../../lib/products-util'

function ProductDetailPage(props) {
    return (
        <Fragment>
            <Head>
                <title>{props.product.title}</title>
                <meta
                    name="description"
                    content={props.product.excert}
                />
            </Head>
            <ProductContent product={props.product} />
        </Fragment>

    );
}

export function getStaticProps(context) {
    const { params } = context;
    const { slug } = params;

    const productData = getProductData(slug);

    return {
        props: {
            product: productData
        },
        revalidate: 60
    }
}

export function getStaticPaths() {
    const productFileName = getProductsFiles();

    const slugs = productFileName.map(fileName => fileName.replace(/\.md$/, ''));

    return {
        paths: slugs.map(slug => ({ params: { slug: slug } })),
        fallback: false
    }
}

export default ProductDetailPage;