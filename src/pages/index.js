import Head from "next/head";
import RootLayout from "@/components/Layouts/RootLayout";
import Banner from "@/components/UI/Banner";
import AllProduct from "@/components/UI/AllProduct";

const HomePage = ({allProduct}) => {
  return (
    <>
      <Head>
        <title>PC-Galaxy</title>
        <meta
          name="description"
          content="This is news portal of programming hero made by next-js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner />
      <AllProduct allProduct={allProduct}></AllProduct>
    </>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async function getStaticProps(){
    const res = await fetch("http://localhost:5000/products")
    const data = await res.json()

    return {
        props:{
            allProduct:data
        },
        revalidate: 5
    }
}