// import { Layout, Menu, theme } from "antd";
// import styles from "@/styles/Home.module.css";
// import Link from "next/link";
// import {
//   ProfileOutlined,
//   MobileOutlined,
//   UserOutlined,
// } from "@ant-design/icons";
// const { Header, Content, Footer } = Layout;

// const RootLayout = ({ children }) => {
//   const {
//     token: { colorBgContainer },
//   } = theme.useToken();
//   return (
//     <Layout>
//       <Header
//         style={{
//           position: "sticky",
//           top: 0,
//           zIndex: 1,
//           width: "100%",
//           display: "flex",
//           alignItems: "center",
//         }}
//       >
//         <div className="demo-logo" />
//         <Menu theme="dark" mode="horizontal" className={styles.menu_items}>
//           <Link href="/">
//             <items>
//               <ProfileOutlined />
//               Desktop
//             </items>
//           </Link>
//           <Link href="/">
//             <items
//               style={{
//                 margin: "0px 25px",
//               }}
//             >
//               <UserOutlined />
//               Laptop
//             </items>
//           </Link>
//           {/* <Link href="/">
//             <items>
//               <MobileOutlined />
//               Components
//             </items>
//           </Link> */}

// <Menu.SubMenu key="3" icon={<MobileOutlined />} title="Components">
//             <Menu.Item key="3.1">
//               <Link href="/">Option 1</Link>
//             </Menu.Item>
//             <Menu.Item key="3.2">
//               <Link href="/">Option 2</Link>
//             </Menu.Item>
//           </Menu.SubMenu>

//           <Link href="/">
//             <items   style={{
//                 margin: "0px 25px",
//               }}>
//               <MobileOutlined />
//               PC Builder
//             </items>
//           </Link>
//         </Menu>
//       </Header>
//       <Content
//         className="site-layout"
//         style={{
//           padding: "0 50px",
//         }}
//       >
//         <div
//           style={{
//             marginTop: 20,
//             padding: 24,
//             height: "100vh",
//             // minHeight: 580,
//             background: colorBgContainer,
//           }}
//         >
//           {children}
//         </div>
//       </Content>
//       <Footer
//         style={{
//           textAlign: "center",
//         }}
//       >
//         PC GALAXY ©2023 Created by Me
//       </Footer>
//     </Layout>
//   );
// };

// export default RootLayout;

import { Button, Layout, Menu, theme } from "antd";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { ProfileOutlined, MobileOutlined } from "@ant-design/icons";
import { useSession, signOut } from "next-auth/react";
const { Header, Content, Footer } = Layout;

const RootLayout = ({ children }) => {
  const { data: session } = useSession();

  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="demo-logo" />
        <Menu theme="dark" mode="horizontal" className={styles.menu_items}>
          <Link href="/">
            <items>
              <ProfileOutlined />
              Home
            </items>
          </Link>

          <Menu.SubMenu key="3" icon={<MobileOutlined />} title="CATEGORY">
            <Menu.Item key="3.7">
              <Link href="/cpu">CPU/Processor</Link>
            </Menu.Item>
            <Menu.Item key="3.7">
              <Link href="/motherboard">Motherboard</Link>
            </Menu.Item>
            <Menu.Item key="3.7">
              <Link href="/ram">RAM</Link>
            </Menu.Item>
            <Menu.Item key="3.7">
              <Link href="/power">Power Supply Unit</Link>
            </Menu.Item>
            <Menu.Item key="3.7">
              <Link href="/storage">Storage Device</Link>
            </Menu.Item>
            <Menu.Item key="3.7">
              <Link href="/monitor">Monitor</Link>
            </Menu.Item>
            <Menu.Item key="3.7">
              <Link href="/others">Others</Link>
            </Menu.Item>
          </Menu.SubMenu>
          <Menu.Item key="4" icon={<MobileOutlined />}>
            <Link href="/pcBuilder">PC Builder</Link>
          </Menu.Item>

          {session?.user ? (
            <Menu.Item key="4">
              <span
                style={{
                  textDecoration: "none",
                  color: "white",
                }}
              >
                {session?.user?.name}
              </span>

              <Button onClick={() => signOut()} type="primary" danger  style={{
                 marginLeft:"10px"
                }}>
                Logout
              </Button>
            </Menu.Item>
          ) : (
            <Menu.Item key="4">
              <Link
                style={{ textDecoration: "none", color: "white" }}
                href="/login"
              >
                Login
              </Link>
            </Menu.Item>
          )}
        </Menu>
      </Header>
      <Content
        className="site-layout"
        style={{
          padding: "0 50px",
        }}
      >
        <div
          style={{
            marginTop: 20,
            padding: 24,

            minHeight: "100vh",
            background: colorBgContainer,
          }}
        >
          {children}
        </div>
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        PC GALAXY ©2023 Created by Me
      </Footer>
    </Layout>
  );
};

export default RootLayout;
