import RootLayout from '@/components/Layouts/RootLayout';
import {
    ArrowRightOutlined,
    CalendarOutlined,
    CommentOutlined,
    ProfileOutlined,
  } from "@ant-design/icons";
  import { Card, Row, Col } from "antd";
  import Image from "next/image";
  import Link from "next/link";

const storage = ({allProduct}) => {
    const {Meta} = Card
    const category = "Storage Device";

    // Filter products based on the category
    const filteredProducts = allProduct.filter((product) => product.category === category);
  
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
        <Row
          gutter={{
            xs: 8,
            sm: 16,
            md: 24,
            lg: 32,
          }}
        >
          {filteredProducts.map((products) => (
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
        </Row>
      </>
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