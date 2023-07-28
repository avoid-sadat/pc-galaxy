import RootLayout from "@/components/Layouts/RootLayout";
import { Col, Row } from "antd";
import Image from "next/image";
import {
  ArrowRightOutlined,
  CalendarOutlined,
  CommentOutlined,
  ProfileOutlined,
} from "@ant-design/icons";

const prodcutDetails = ({ details }) => {
  return (
    <div>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={12}>
          <div>
            <Image
              src={details?.image}
              alt={details?.productName} // Add alt attribute for accessibility
              width={500}
              height={300}
              responsive // Use layout prop instead of "responsive"
            />
          </div>
        </Col>
        <Col className="gutter-row" span={12}>
          <div>
            {" "}
            <h1>{details?.productName}</h1>
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
                {details?.category}
              </span>
              <span>
                <CommentOutlined />
                {details?.price} PRICE
              </span>
              <span>
                <ProfileOutlined />
                {details?.status}
              </span>
            </p>
            <p
              style={{
                fontSize: "20px",
              }}
            >
              {details?.rating}
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default prodcutDetails;

prodcutDetails.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:5000/products");
  const products = await res.json();
  const paths = products.map((product) => ({
    params: { productid: product.id.toString() },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async function getStaticProps(context) {
  const { params } = context;
  const res = await fetch(`http://localhost:5000/products/${params.productid}`);
  const data =await res.json();
  console.log(data);
  return {
    props: {
      details: data,
    },
  };
};
