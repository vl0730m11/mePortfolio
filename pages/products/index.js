function AllProductsPage(props){
    return;
}

export function getStaticProps() {
    const allProducts = getAllProducts();
  
    return {
      props: {
        posts: allProducts
      },
      revalidate: 60
    }
  }
  
  export default AllProductsPage;