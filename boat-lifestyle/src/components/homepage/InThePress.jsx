import React, { useState } from "react";
import styled from "styled-components";

const ThePress = styled.div`
  width: 100%;
  height: 400px;
  background: #141414;
  color: white;
  align-items: center;
  color: white;
  margin: auto;

  .ThepressTxt {
    font-size: 30px;
    font-weight: 700;
    padding-top: 80px;
  }

  .ThePresImgCon {
    width: 80%;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin: auto;
    margin-top: 80px;
  }

  .ThePresImgCon img {
    width: 80%;
    display: block;
    margin: auto;
  }
  .ThepressTxtHover {
    font-size: 20px;
  }
  span{
    font-size: 50px;
    font-weight: 700;
    color:red;
    padding:10px

  }
`;

export const InThePress = () => {
  const [inThePress, setInThePress] = useState("");
  return (
    <>
    <ThePress>
      <div>
        <h1 className="ThepressTxt">In the Press</h1>
        <p className="ThepressTxtHover">
          <span>"</span>
          {inThePress}
          <span>"</span>
        </p>
      </div>

      <div className="ThePresImgCon">
        <div
          onMouseMove={() => {
            setInThePress("Warburg invests $100 mn in boAt");
          }}
        >
          <img
            src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/mint_0566185f-75d7-4819-a2a2-e2acc4535e78_200x.png?v=1649066803"
            alt="mint"
          />
        </div>

        <div
          onMouseMove={() => {
            setInThePress(
              "How India's boAt became the fifth largest wearable brand in the world"
            );
          }}
        >
          <img
            src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Forbes_1_641a219a-af36-45ee-8d3b-90ca148056c1_200x.png?v=1649066820"
            alt="logo"
          />
        </div>

        <div
          onMouseMove={() => {
            setInThePress(
              "The Airdopes 441 is sweat proof and packs in crisp audio. Great for fitness enthusiasts."
            );
          }}
        >
          <img
            src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/techradar_1_ba476d16-16de-4a29-baa2-537f33fc7f88_200x.png?v=1649066820"
            alt="logo"
          />
        </div>

        <div
          onMouseMove={() => {
            setInThePress(
              "IPL 2020: boAt becomes the official audio partner for six teams"
            );
          }}
        >
          <img
            src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/ET_1_9f80aa59-c905-4886-b75f-5b96808f2903_200x.png?v=1649066820"
            alt="logo"
          />
        </div>

        <div
          onMouseMove={() => {
            setInThePress(
              "TWS Earbuds Shipments in India Up 723 Percent YoY in Q3, Boat Emerged as Leading Player: Counterpoint"
            );
          }}
        >
          <img
            src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/gadgets360_1_6a0c2c78-109a-4cbc-be58-05b893a41d4a_231x.png?v=1649066821"
            alt="logo"
          />
        </div>
      </div>
    </ThePress>
    <div>
        <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Fotter-Awards_11-02-2022_5d6a9e4a-d3d4-434b-8846-4403e92c3573_1995x.png?v=1651217615" alt="logo" />
    </div>
    </>
  );
};
