import RootLayout from "@/components/Layouts/RootLayout";
import { Card, Row, Col, Button, Rate } from "antd";
import Image from "next/image";
import { useEffect } from "react";
import {
  CalendarOutlined,
  CommentOutlined,
} from "@ant-design/icons";
import { useRouter } from "next/router";
import { useAppContext } from "@/AppContext";

const Category = ({ allCategory }) => {
  const router = useRouter();
  const { category } = router.query;
  const checkStatus = "Out of Stock";

  const {state,dispatch} = useAppContext()

  useEffect(() => {
    console.log("Received data:", allCategory);
  }, [allCategory]);

  const filteredProducts = allCategory.filter(
    (product) => product.category === category
  );

  

  const handleAddToBuild = (product) => {
    // Dispatch an action to add the selected component to the state
    dispatch({ type: "ADD_COMPONENT", payload: product });

    router.push("/pcBuilder");
  };

  return (
    <>
      <h1 style={{ textAlign: "center", fontSize: "50px", margin: "30px 0px" }}>
        #TODAY HIGHLIGHT
        <p>{category}</p>
      </h1>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        {filteredProducts.map((product) => (
          <Col
            key={product.id}
            className="gutter-row"
            xs={24}
            sm={12}
            md={8}
            lg={6}
          >
            <Card
              hoverable
              cover={
                <Image
                  src={product.image}
                  alt={product.productName}
                  width={500}
                  height={200}
                  responsive
                />
              }
            >
              <Card.Meta title={product.productName} />
              <div>
                <span>
                  <CalendarOutlined />
                  Price: {product.price}
                </span>
              </div>
              <div>
                <span>
                  <CommentOutlined />
                  Status: {product?.status}
                </span>
              </div>
              <div>
                <span>
                  <CalendarOutlined />
                  Category: {product?.category}
                </span>
              </div>
              <div>
                <span>
                  <Rate
                    allowClear={false}
                    defaultValue={product?.rating}
                    style={{ color: "orange" }}
                  />
                </span>
              </div>
              {product?.status === checkStatus ? (
                <Button disabled>Add To Build</Button>
              ) : (
                <Button type="primary" onClick={() => handleAddToBuild(product)}>ADD To Builder</Button>
              )}
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Category;

Category.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async function getServerSideProps() {
  // Fetch data from the API based on the category parameter
  const res = await fetch(`http://localhost:5000/products`);
  const data = await res.json();

  return {
    props: {
      allCategory: data,
    },
  };
};
