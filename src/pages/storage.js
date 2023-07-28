import RootLayout from '@/components/Layouts/RootLayout';

const storage = ({allProduct}) => {
    const category = "Storage Device";

    // Filter products based on the category
    const filteredProducts = allProduct.filter((product) => product.category === category);
  
    return (
        <div>
        <h1>Storage Products</h1>
        {filteredProducts.map((product) => (
          <div key={product.id}>
            <h3>{product.productName}</h3>
            <p>{product.price}</p>
            {/* Add other product details you want to display */}
          </div>
        ))}
      </div>
    );
};

export default storage;

storage.getLayout = function getLayout(page){
    return <RootLayout>{page}</RootLayout>
}

export const getStaticProps = async function getStaticProps() {
    const res = await fetch("http://localhost:5000/products");
    const data = await res.json();
  
    return {
      props: {
        allProduct: data,
      },
    };
  };