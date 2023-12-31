import { useState, useEffect } from "react";
import {
  ArrowRightOutlined,
  CalendarOutlined,
  CommentOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import { Card, Row, Col, Button, Space, Rate } from "antd";
import Image from "next/image";
import Link from "next/link";

const AllProduct = ({ allProduct }) => {
  const { Meta } = Card;

  // State to store the randomly selected 6 products
  const [randomProducts, setRandomProducts] = useState([]);

  // Function to get 6 random products from the allProduct array
  const getRandomProducts = () => {
    const shuffledProducts = allProduct.sort(() => 0.5 - Math.random());
    const selectedProducts = shuffledProducts.slice(0, 6);
    setRandomProducts(selectedProducts);
  };

  useEffect(() => {
    // Call the function to get 6 random products on component mount
    getRandomProducts();

    // Set up auto-refresh to get new random products every 30 seconds (adjust the interval as needed)
    const interval = setInterval(() => {
      getRandomProducts();
    }, 5000);

    // Clean up the interval to avoid memory leaks when the component is unmounted
    return () => {
      clearInterval(interval);
    };
  }, [allProduct]);

  return (
    <>
      <h1
        style={{
          textAlign: "center",
          fontSize: "50px",
          margin: "30px 0px",
        }}
      >
        #TODAY HIGHLIGHT
      </h1>
      {/* <Row
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        {randomProducts.map((products) => (
          <Col
            key={products.id}
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
                  src={products?.image}
                  alt={products?.productName} // Add alt attribute for accessibility
                  width={500}
                  height={200}
                  responsive // Use layout prop instead of "responsive"
                />
              }
            >
              <Meta title={products?.productName} />
              <div
                className="line"
                style={{
                  height: "5px",
                  margin: "20px 0",
                  background: "#000",
                  width: "100%",
                }}
              ></div>

              <p
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                  margin: "10px 0px",
                  fontSize: "12px",
                }}
              >
                <span>
                  <CalendarOutlined />
                  {products?.price} Price
                </span>
                <span>
                  <CalendarOutlined />
                  {products?.category} Category
                </span>
                <span>
                  <CommentOutlined />
                  {products?.status} Status
                </span>
                <span>
                  <ProfileOutlined />
                  {products?.rating} Rating
                </span>
              </p>
              <Link href={`/products/${products?.id}`}>
                <p
                  style={{
                    textAlign: "center",
                    fontSize: "15px",
                    marginTop: "20px",
                    backgroundColor: "black",
                    color: "white",
                    width: "100%",
                  }}
                >
                  Product Details <ArrowRightOutlined />
                </p>
              </Link>
            </Card>
          </Col>
        ))}
      </Row> */}


<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        {randomProducts.map((products) => (
          <Col
            key={products.id}
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
                  src={products?.image}
                  alt={products?.productName}
                  width={500}
                  height={200}
                  responsive
                />
              }
            >
              <Card.Meta title={products?.productName} />
              <div>
                <span>
                  <CalendarOutlined />
                  Price: {products?.price}
                </span>
              </div>
              <div>
                <span>
                  <CommentOutlined />
                  Status: {products?.status}
                </span>
              </div>
              <div>
                <span>
                  <CalendarOutlined />
                  Category: {products?.category}
                </span>
              </div>
              <div>
                <span>
                  <Rate
                    allowClear={false}
                    defaultValue={products?.rating}
                    style={{ color: "orange" }}
                  />
                </span>
              </div>
              <Link href={`/products/${products?.id}`}>
                <p
                  style={{
                    textAlign: "center",
                    fontSize: "15px",
                    marginTop: "20px",
                    backgroundColor: "black",
                    color: "white",
                    width: "100%",
                  }}
                >
                  Product Details <ArrowRightOutlined />
                </p>
              </Link>
            </Card>
          </Col>
        ))}
      </Row>

    </>
  );
};

export default AllProduct;
