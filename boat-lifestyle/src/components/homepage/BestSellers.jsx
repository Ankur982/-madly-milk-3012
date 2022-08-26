import { Button } from "@chakra-ui/react";
import React, { useState } from "react";
import styled from "styled-components";
import data from "../db.json";

const BestSellerBox = styled.div`
  width: 92%;
  margin: auto;
  display: flex;
  gap: 20px;
  line-height: 25px;
  overflow: scroll;
  overflow-y: hidden;

  .BestSellerItem {
    background-color: #e3e3e3;
    border: 1px solid white;
    width: 331px;
    height: 420px;
    border: 1px solid white;
    color: white;
    margin: auto;
    border-radius: 20px;
  }

  .BestSellerItemDetails {
    margin: auto;
    margin: 7px;
    height: 165px;
    border: 1px solid white;
    background-color: white;
    color: black;
    height: 163px;
    padding: 5px 12px 10px;
    border-radius: 10px;
  }

  .BestSellerItemImage img {
    display: block;
    margin: auto;
    height: 248px;
  }

  .itemTitle {
    fonst-size: 15px;
    font-weight: 600;
    color: black;
  }

  .itemRev {
    font-size: 11px;
  }

  .itemDesc span {
    font-size: 15px;
  }
  .itemSav {
    font-size: 12px;
    margin-bottom: 5px;
  }
`;

export const BestSeller = () => {
  const [bestSellerItem, setBestSellerItem] = useState(data.BestSellers);

  return (
    <>
      <h1
        style={{
          fontSize: "30px",
          fontWeight: "700",
          textAlign: "center",
          marginBottom:"50px",
          color: "white",
        }}
      >
        Best Sellers
      </h1>
      <BestSellerBox>
        {bestSellerItem &&
          bestSellerItem.map((e) => (
            <div key={e.id} className="BestSellerItem">
              <div className="BestSellerItemImage">
                <img src={e.image} alt="logo" />
              </div>

              <div className="BestSellerItemDetails">
                <h1 className="itemTitle">{e.title}</h1>
                <p className="itemRev">
                  {" "}
                  ⭐{e.rating} | {e.reviews} reviews
                </p>
                <hr />
                <p className="itemDesc">
                  <span style={{ color: "red", fontWeight: "600" }}>
                    ₹ {e.dic_price}
                  </span>{" "}
                  <span>
                    <del>₹ {e.price}</del>
                  </span>{" "}
                </p>
                <p className="itemSav">
                  You Save: ₹ {e.saving} ({e.discount})
                </p>
                <Button w="294px" h="37px" bg="#ff0000" color="white" size="lg">
                  ADD TO CART
                </Button>
              </div>
            </div>
          ))}
      </BestSellerBox>
    </>
  );
};
