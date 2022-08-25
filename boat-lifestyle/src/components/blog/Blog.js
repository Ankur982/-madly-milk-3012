import { BlogCard } from "./BlogCard";
import styled from "styled-components";
import { Button, ButtonGroup } from "@chakra-ui/react";

const blog = [
  {
    blogThumbnail:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Earphone_1296x_540x_25759241-1386-4661-bec0-bad7c111178f_540x.png?v=1650620291",
    blogTital: "Earphones Buying Guide - Everything You Need To Know",
  },
  {
    blogThumbnail:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Main-banner_520x500_540x_d7c9944e-0985-498b-9a89-3a54d32c9dd2_520x.png?v=1650620307",
    blogTital: "The Ultimate Smartwatch Guide - Get The World On Your Wrist",
  },
  {
    blogThumbnail:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/articles/whatsapp_2_600x.jpg?v=1659706408",
    blogTital:
      "#BondWithboAt: Best Rakhi Gift for Brother and Sister You’d Hate To Miss Out On!",
  },
];

const BlogContainer = styled.section`
  width: 100%;
  height: 532px;
  color: white;
  text-align: center;

  & > h2 {
    margin-top: 50px;
    font-size: 50px;
    font-style: normal;
    font-weight: 600;
    line-height: 61px;
    letter-spacing: 0em;
  }
  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Blog = () => {
  return (
    <>
      <BlogContainer>
      <h2>Boat Blog</h2>
      <div>
        {blog.map(({ blogThumbnail, blogTital }) => (
            <BlogCard blogThumbnail={blogThumbnail} blogTital={blogTital} />
            ))}
      </div>
    </BlogContainer>
      <Button bg='#ff0000' color="white" size='lg' marginBottom="30px">
      EXPLORE BLOGS
    </Button>
    </>
  );
};
