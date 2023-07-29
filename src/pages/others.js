import RootLayout from '@/components/Layouts/RootLayout';
import {
    ArrowRightOutlined,
    CalendarOutlined,
    CommentOutlined,
    ProfileOutlined,
  } from "@ant-design/icons";
  import { Card, Row, Col, Rate } from "antd";
  import Image from "next/image";
  import Link from "next/link";

const others = ({allProduct}) => {
    const {Meta} = Card
    const category = "Others"

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

export default others;

others.getLayout = function getLayout(page){
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