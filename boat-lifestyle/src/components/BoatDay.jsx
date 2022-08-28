import React, { useEffect } from "react";
import { Button, Link } from "@chakra-ui/react";
import { useState } from "react";
import styled from "styled-components";
import data from "./db.json";
import { Chatbot } from "./Chatbot";
import { useNavigate } from "react-router";

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
const getLocalItem = () =>{
  return JSON.parse(localStorage.getItem("mensData")) || [];

}
export const BoatDay = () => {
  const [bestSellerItem, setBestSellerItem] = useState(data.BoatDay);
  const navigate=useNavigate()
  const [selectedBox, setSelectedBox] = useState({});
  const [spraid, setSpraid] = useState(getLocalItem());

  const addtoCart = (item) => {
    setSpraid([...spraid, item]);
    alert("Item Added.!");

    // console.log("item: ", item);
  };
  useEffect(()=>{

    localStorage.setItem("mensData", JSON.stringify(spraid));
  },[spraid])
  
  return (
    <div style={{ backgroundColor: "white" }}>
      <Chatbot/>
      <div>
        <img width={"100%"}
          src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/desktop_banner_1_470997c7-fd70-4dc6-a04d-83005c8b76c3.jpg?v=1661430687"
          alt="img"
        />
      </div>
      <div>
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
                  <Button
                    w="294px"
                    h="37px"
                    bg="#fbc50a"
                    color="white"
                    size="lg"
                    onClick={() => addtoCart(e)}
                  >
                    ADD TO CART
                  </Button>
                </div>
              </div>
            ))}
        </BestSellerBox>
      </div>
      <div>
        <img width={"100%"}
          src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Offer-Strip-Desktop-Type-2.png?v=1661445635"
          alt=""
        />
      </div>
      <div>
        <img
        width={"100%"}
          src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Rashmika_3f80b5d7-f612-4419-b48e-7481968e094f.png?v=1661445635"
          alt=""
        />
      </div>
      <div>
        <img
        width={"100%"}
          src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/DB_5.png?v=1661509018"
          alt=""
        />
        
      </div>
      <div style={{ justifyContent:"center",alignItems:"center" ,textAlign:"center" ,margin:"auto", fontSize:"25px", fontWeight:"600"}}>
        <div>
        <h1>5 Days to Make It Count
It's not going to be here forever. Make these five days count and get the maximum rewards flowing your way.</h1>  <Button bg={"red"} color={"white"} onClick={()=>navigate("/productitemspage")} >SHOP NOW</Button> 
        </div>
        
      </div>
    </div>
  );
};
