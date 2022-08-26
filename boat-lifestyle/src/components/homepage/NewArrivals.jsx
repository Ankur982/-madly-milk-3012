import { Button } from "@chakra-ui/react";
import React, { useState } from "react";
import styled from "styled-components";
import data from "../db.json";

const BestSellerBox = styled.div`
  width: 98%;
  margin: auto;
  display: flex;
  gap: 20px;
  line-height: 25px;
  overflow: scroll;
  overflow-y: hidden;
  margin-top: 50px;

  .BestSellerItem {
    background-color: #e3e3e3;
    width: 240px;
    height: 540px;
    color: white;
    margin: auto;
    text-align: center;
  }

  .BestSellerItemImage video {
    height: 405px;
    autoplay
    loop
  }

  .BestSellerItemDetails {
    margin: auto;
    height: 135px;
    width: 240px;
    border: 1px solid white;
    background-color: white;
    color: black;
    height: 163px;
    border-radius: 10px;
  }

  .itemTitle {
    fonst-size: 20px;
    font-weight: 600;
    color: black;
  }

  .typeTxt {
    color: red;
    font-weight: 600;
  }

  .itemRev {
    font-size: 11px;
  }

  .itemDesc span {
    font-size: 18px;
    font-weight: 600;
  }
  .itemSav {
    font-size: 12px;
    margin-bottom: 5px;
  }
`;

export const NewArrivals = () => {
  const [bestSellerItem, setBestSellerItem] = useState(data.NewArrivals);

  return (
    <>
      <BestSellerBox>
        {bestSellerItem &&
          bestSellerItem.map((e) => (
            <div key={e.id} className="BestSellerItem">
              <div className="BestSellerItemImage">
              <video
                    src={e.video}
                    loop
                    autoPlay
                    muted
                ></video>
              </div>

              <div className="BestSellerItemDetails">
                <h1 className="itemTitle">{e.title}</h1>
                <p className="itemRev">{e.title}</p>
                <hr />
                <p className="typeTxt">New Arrivals</p>
                <p className="itemDesc">
                  <span style={{ color: "red", fontWeight: "600" }}>
                    ₹ {e.dic_price}
                  </span>{" "}
                  <span>
                    <del>₹ {e.price}</del>
                  </span>{" "}
                </p>
              </div>
            </div>
          ))}
      </BestSellerBox>
    </>
  );
};
