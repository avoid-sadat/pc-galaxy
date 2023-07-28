/* eslint-disable react-hooks/rules-of-hooks */

// import RootLayout from "@/components/Layouts/RootLayout";
// import Head from "next/head";
// import { Button, Card, List } from "antd";
// import Link from "next/link";
// import { useAppContext } from "@/AppContext";

// const buildPc = ({ allCategory }) => {
//   const sixCategories = allCategory.slice(0, 6);
//   const { state } = useAppContext();
//   const { selectedComponents } = state;

//   const isCompleteBuild = selectedComponents.length >= 5;
  

//   return (
//     <><>
//       <Head>
//         <title>PC-Galaxy</title>
//         <meta
//           name="description"
//           content="This is news portal of programming hero made by next-js" />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//       <h1>PC build</h1>
//       {selectedComponents.map((component) => (
//         <div key={component.id}>
//           {/* Display the selected component details here */}
//           {component.productName}
//         </div>
//       ))}
//       <button disabled={!isCompleteBuild}>Complete Build</button>
//     </><List
//         dataSource={sixCategories}
//         renderItem={(category) => (
//           <List.Item>
//             <Card>
//               <div>
//                 {category.category}
//               </div>
//               <Button>
//                 {/* Dynamic Link based on category name */}
//                 <Link href={`/categories/${category.category}`}>
//                   ADD
//                 </Link>
//               </Button>
//             </Card>
//           </List.Item>
//         )} /></>
//     </>
//   );
// };

// export default buildPc;

// buildPc.getLayout = function getLayout(page) {
//   return <RootLayout>{page}</RootLayout>;
// };

// export const getServerSideProps = async function getServerSideProps() {
//   const res = await fetch("http://localhost:5000/products");
//   const data = await res.json();

//   // Assuming data is an array of categories, e.g., ["CPU", "GPU", "RAM"]
//   return {
//     props: {
//       allCategory: data,
//     },
//   };
// };

// import RootLayout from "@/components/Layouts/RootLayout";
// import Head from "next/head";
// import { Button, Card, List } from "antd";
// import Link from "next/link";
// import { useAppContext } from "@/AppContext";

// const buildPc = ({ allCategory }) => {
//   const sixCategories = allCategory.slice(0, 6);
//   const { state } = useAppContext();
//   const { selectedComponents } = state;

//   const isCompleteBuild = selectedComponents.length >= 5;

//   return (
//     <>
//       <Head>
//         <title>PC-Galaxy</title>
//         <meta
//           name="description"
//           content="This is the news portal of programming hero made by next-js"
//         />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//       <h1>PC build</h1>
//       {selectedComponents.map((component) => (
//         <div key={component.id}>
//           {/* Display the selected component details here */}
//           {component.productName}
//         </div>
//       ))}
//       <button disabled={!isCompleteBuild}>Complete Build
//       window.alert("Build completed successfully!");
//       </button>
      
//       <List
//         dataSource={sixCategories}
//         renderItem={(category) => (
//           <List.Item>
//             <Card>
//               <div>
//                 {category.category}
//               </div>
//               <Button>
//                 {/* Dynamic Link based on category name */}
//                 <Link href={`/categories/${category.category}`}>
//                   ADD
//                 </Link>
//               </Button>
//             </Card>
//           </List.Item>
//         )}
//       />
//     </>
//   );
// };

// export default buildPc;

// buildPc.getLayout = function getLayout(page) {
//   return <RootLayout>{page}</RootLayout>;
// };

// export const getServerSideProps = async function getServerSideProps() {
//   const res = await fetch("http://localhost:5000/products");
//   const data = await res.json();

//   // Assuming data is an array of categories, e.g., ["CPU", "GPU", "RAM"]
//   return {
//     props: {
//       allCategory: data,
//     },
//   };
// };

import React from "react";
import RootLayout from "@/components/Layouts/RootLayout";
import Head from "next/head";
import { Button, Card, List } from "antd";
import Link from "next/link";
import { useAppContext } from "@/AppContext";

const buildPc = ({ allCategory }) => {
  const sixCategories = allCategory.slice(0, 6);
  const { state } = useAppContext();
  const { selectedComponents } = state;

  const isCompleteBuild = selectedComponents.length >= 5;

  const handleCompleteBuild = () => {
    if (isCompleteBuild) {
      window.alert("Build completed successfully!");
    } else {
      window.alert("Please add at least 5 components to complete the build.");
    }
  };

  return (
    <>
      <Head>
        <title>PC-Galaxy</title>
        <meta
          name="description"
          content="This is the news portal of programming hero made by next-js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>PC build</h1>
      {selectedComponents.map((component) => (
        <div key={component.id}>
          {/* Display the selected component details here */}
          {component.productName}
        </div>
      ))}
      <button disabled={!isCompleteBuild} onClick={handleCompleteBuild}>
        Complete Build
      </button>

      <List
        dataSource={sixCategories}
        renderItem={(category) => (
          <List.Item>
            <Card>
              <div>{category.category}</div>
              <Button>
                {/* Dynamic Link based on category name */}
                <Link href={`/categories/${category.category}`}>ADD</Link>
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

export const getServerSideProps = async function getServerSideProps() {
  const res = await fetch("http://localhost:5000/products");
  const data = await res.json();

  // Assuming data is an array of categories, e.g., ["CPU", "GPU", "RAM"]
  return {
    props: {
      allCategory: data,
    },
  };
};
