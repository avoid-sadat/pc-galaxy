// import { Carousel } from 'antd';
// import Image from "next/image";
// import DrawingImage from "@/assets/images/banner-images/drawing_image.jpg";
// import EagleImage from "@/assets/images/banner-images/eagle_image.jpg";
// const contentStyle = {
//   height: '160px',
//   color: '#fff',
//   lineHeight: '160px',
//   textAlign: 'center',
//   background: '#364d79',
// };
// const Banner = () => {

//         <Carousel autoplay>
//         <div>
//           <h3 style={contentStyle}><Image src={DrawingImage} fill alt="drawing_image" /></h3>
          
//         </div>
//         <div>
//           <h3 style={contentStyle}>2</h3>
//           <Image
//             src={EagleImage}
//             fill
//             alt="eagle_image"
//             style={{ grayScale: "-1" }}
//           />
//         </div>
//         <div>
//           <h3 style={contentStyle}>3</h3>
//           <Image
//             src={EagleImage}
//             fill
//             alt="eagle_image"
//             style={{ grayScale: "-1" }}
//           />
//         </div>
//         <div>
//           <h3 style={contentStyle}>4</h3>
//           <Image src={DrawingImage} fill alt="drawing_image" />
//         </div>
//       </Carousel>
   
// };

// export default Banner;



// for server side rendering (SSR) with json-server data
import { Col, Row, Carousel } from "antd";
import {
  ArrowRightOutlined,
  CalendarOutlined,
  CommentOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import Image from "next/image";
import Pic1 from "@/assets/images/banner-images/pic1.jpg";
import Pic2 from "@/assets/images/banner-images/pic2.jpg";

const contentStyle = {
  height: "425px",
  color: "#000",
};

const Banner = () => (
  <Carousel effect="fade" autoplay style={{ margin: "20px 0px" }}>
    {/* slider-1 */}
    <div>
      <Row>
        <Col
          lg={{
            span: 8,
          }}
        >
          <h1 style={{ fontSize: "50px" }}>
            LET&apos;S BUILD
            <br />
            YOUR PC
          </h1>
          <div
            className="line"
            style={{
              height: "5px",
              margin: "20px 0",
              background: "#000",
              width: "95%",
            }}
          ></div>

          <p
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "90%",
              color: "gray",
              margin: "10px 0px",
            }}
          >
            <span>
              <CalendarOutlined /> FEBRUARY 28, 2023
            </span>
            <span>
              <CommentOutlined /> NO COMMENTS
            </span>
            <span>
              <ProfileOutlined /> HOBBY
            </span>
          </p>

          <p style={{ fontSize: "20px" }}>
            Beauteous before up across felt sheepishly and more mournfully the
            wow so more flustered and one up pushed salamander collective
            blinked that iguanodon bid much some since hey far goodness jaguar
            whil...
          </p>
        </Col>

        <Col
          lg={{
            span: 16,
          }}
          style={contentStyle}
        >
          <Image src={Pic1} fill alt="drawing_image" />
        </Col>
      </Row>
    </div>
    {/* slider-2 */}
    <div>
      <Row>
        <Col
          lg={{
            span: 8,
          }}
        >
          <h1 style={{ fontSize: "50px" }}>
            EAGLE, YOU ARE
            <br />
            NOT ALONE
          </h1>
          <div
            className="line"
            style={{
              height: "5px",
              margin: "20px 0",
              background: "#000",
              width: "95%",
            }}
          ></div>

          <p
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "90%",
              color: "gray",
              margin: "10px 0px",
            }}
          >
            <span>
              <CalendarOutlined /> MARCH 30, 2023
            </span>
            <span>
              <CommentOutlined /> 5 COMMENTS
            </span>
            <span>
              <ProfileOutlined /> NATURE
            </span>
          </p>

          <p style={{ fontSize: "20px" }}>
            A spread opened patient and compulsively one placed seagull goodness
            python owing snapped yikes equitable when much the much Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Eligendi, tenetur!...
          </p>
         
        </Col>

        <Col
          lg={{
            span: 16,
          }}
          style={contentStyle}
        >
          <Image
            src={Pic2}
            fill
            alt="eagle_image"
            style={{ grayScale: "-1" }}
          />
        </Col>
      </Row>
    </div>

  </Carousel>
);
export default Banner;