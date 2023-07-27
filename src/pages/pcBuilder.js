import RootLayout from "@/components/Layouts/RootLayout";
import Head from "next/head";

const buildPc = () => {
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
      <h1>PC build</h1>
    </>
  );
};
export default buildPc;

buildPc.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
