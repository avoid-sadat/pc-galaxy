import RootLayout from "@/components/Layouts/RootLayout";
import { Col, Rate, Row } from "antd";
import Image from "next/image";
import {
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
          <div>
            <p style={{ fontSize: "20px" }}>Reviews:</p>
              {details?.reviews.map((review) => (
                <ul key={review.id}>
                  <li>User: {review.user}</li>
                  <li>Comment: {review.comment}</li>
                </ul>
              ))}
            </div>
            <div>
          <p style={{ fontSize: "20px" }}>Rating:</p>
            <Rate allowClear={true} defaultValue={details?.rating} />
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
                Category {details?.category}
              </span>
              <span>
                <CommentOutlined />
                PRICE {details?.price}
              </span>
              <span>
                <ProfileOutlined />
                Status {details?.status}
              </span>
            </p>
            <p
              style={{
                fontSize: "20px",
              }}
            >
              Description:{details?.description}
            </p>
            <div>
              <p style={{ fontSize: "20px" }}>Key Features:</p>
              <ul>
                {Object.entries(details.keyFeatures).map(([key, value]) => (
                  <li key={key}>
                    {key}: {value}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p style={{ fontSize: "20px" }}>individual Rating:</p>
              <ul>
                {Object.entries(details.individualRating).map(
                  ([key, value]) => (
                    <li key={key}>
                      {key}:
                      <Rate key={key} allowClear={true} defaultValue={value} />
                    </li>
                  )
                )}
              </ul>
            </div>
            <div>
            <p style={{ fontSize: "20px" }}>Average Rating:</p>
              <Rate allowClear={true} defaultValue={details?.averageRating} />
            </div>
            
       
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
  const data = await res.json();
  console.log(data);
  return {
    props: {
      details: data,
    },
  };
};
