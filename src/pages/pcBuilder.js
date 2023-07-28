import RootLayout from "@/components/Layouts/RootLayout";
import Head from "next/head";
import { Button, Card, List } from "antd";
import Link from "next/link";

const buildPc = ({ allCategory }) => {
  const sixCategories = allCategory.slice(0, 6);

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
      <List
        dataSource={sixCategories}
        renderItem={(category) => (
          <List.Item>
            <Card>
              <div>
                {category.category}
              </div>
              <Button>
                {/* Dynamic Link based on category name */}
                <Link href={`/${category.category.toLowerCase()}`}>
                  ADD
                </Link>
              </Button>
            </Card>
          </List.Item>
        )}
      />
    </>
  );
};

export default buildPc;

buildPc.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async function getStaticProps() {
  const res = await fetch("http://localhost:5000/products");
  const data = await res.json();

  // Assuming data is an array of categories, e.g., ["CPU", "GPU", "RAM"]
  return {
    props: {
      allCategory: data,
    },
  };
};
