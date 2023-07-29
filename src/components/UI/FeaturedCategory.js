import { Button, Space } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const FeaturedCategory = ({ allProduct }) => {
  const sixCategories = allProduct.slice(0, 7);
  const router = useRouter();
  const { category } = router.query;
  return (
    <>
      <h1
        style={{
          textAlign: "center",
          fontSize: "50px",
          margin: "30px 0px",
        }}
      >
        Featured Category
      </h1>
      <div
        style={{
          textAlign: "center",
        }}
      >
        <Space className="site-button-ghost-wrapper" wrap>
          {sixCategories.map((category) => (
            <Link
              href={`/${category.category.toLowerCase()}`}
              key={category.id}
            >
              <Button type="primary" ghost>
                {category.category}
              </Button>
            </Link>
          ))}
        </Space>
      </div>
    </>
  );
};

export default FeaturedCategory;
