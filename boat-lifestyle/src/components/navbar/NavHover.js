import { Link, Navigate } from "react-router-dom";
import styled from "styled-components";

const collectionOptinArray = [
  {
    routeLink: "/collections/true-wireless-earbuds",
    coverImgUrl:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/category_01_720x.png?v=1602142415",
    alt: "earbuds",
  },
  {
    routeLink: "/collections/bluetooth-wireless-headphones",
    coverImgUrl:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/category_02_720x.png?v=1602142415",
    alt: "headphone",
  },
  {
    routeLink: "/collections/smart-watches",
    coverImgUrl:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/New-Category-Banners_07_720x.png?v=1611569935",
    alt: "watches",
  },
  {
    routeLink: "/collections/wired-earphones",
    coverImgUrl:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/category_03_720x.png?v=1602142415",
    alt: "headphones",
  },
  {
    routeLink: "/collections/bluetooth-speakers",
    coverImgUrl:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/category_04_720x.png?v=1602142415",
    alt: "speakers",
  },
  {
    routeLink: "/collections/home-audio",
    coverImgUrl:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/category_05_720x.png?v=1602142415",
    alt: "audio",
  },
  {
    routeLink: "/collections/mobile-accessories",
    coverImgUrl:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/category_06_720x.png?v=1602142415",
    alt: "accessories",
  },
  {
    routeLink: "/collections/trebel-audiowear-for-women",
    coverImgUrl:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Trebel_catgry_02_720x.png?v=1615033049",
    alt: "audiowear",
  },
  {
    routeLink: "/collections/limited-edition",
    coverImgUrl:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/category_08_720x.png?v=1602142415",
    alt: "limited",
  },
  {
    routeLink: "/collections/misfit-by-boat",
    coverImgUrl:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/MISFIT-shop_720x.png?v=1624859990",
    alt: "boat",
  },
  {
    routeLink: "/collections/immortal-gaming",
    coverImgUrl:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/Immortal_category_Image_720x.png?v=1626094103",
    alt: "gaming",
  },
];

const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  height: 80px;
  margin-top: 20px;

  & img {
    width: 320px;
  }
`;

const SearchResult = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 10px 30px;
  overflow: hidden;
  & span {
    width: fit-content;
    border: 1px solid red;
    border-radius: 20px;
    padding: 10px;
    margin: 2px;
    font-size: 14px;
  }
`;



export const Collection = () => {
  return (
    <span className="navbar-collection">
      <ImgContainer>
        {collectionOptinArray.map(({ routeLink, coverImgUrl, alt }) => (
          <Link to="/">
            <img src={coverImgUrl} alt={alt}/>
          </Link>
        ))}
      </ImgContainer>
    </span>
  );
};

export const SearchResults = () => {
  return (
    <SearchResult className="search-results">
      <span>Dummy data</span>
      <span>Lorem ipsum dolor</span>
      <span>Lorem.</span>
      <span>Dummy data</span>
      <span>Lorem ipsum dolor</span>
    </SearchResult>
  );
};
