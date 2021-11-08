import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';

const productsDirectory = path.join(process.cwd(), 'posts');

export function getProductsFiles() {
    return fs.readdirSync(productsDirectory);
}

export function getProductData(productIdentifier) {
    const productSlug = productIdentifier.replace(/\.md$/, ''); //remove the file extension
    const filePath = path.join(productsDirectory, `${productSlug}.md`);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent);

    const productData = {
        slug: productSlug,
        ...data,
        content,
    };

    return productData;
}

export function getAllProducts() {
    const productFiles = getProductsFiles();

    const allProducts = productFiles.map(productFile => {
        return getProductData(productFile);
    });

    const sortedProducts = allProducts.sort((productA, productB) => productA.date > productB.date ? -1 : 1);
    return sortedProducts;
}

export function getFeaturedProducts(){
    const allProducts = getAllProducts();

    const featuredProducts = allProducts.filter(product => product.isFeatured);

    return featuredProducts;
}