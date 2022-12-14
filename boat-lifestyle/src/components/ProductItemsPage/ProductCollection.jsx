import React, { useContext, useEffect } from "react";
import { fetchUsers } from "./fetchProduct";
import { Button } from "@chakra-ui/react";
import { useState } from "react";
import styled from "styled-components";
import { AppContext } from "../navbar/Navbar";
import { ModalComponent } from "../ModalComponent";
import { AiOutlineHeart } from "react-icons/ai";

const BestSellerBox = styled.div`
  width: 92%;
  display: grid;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto auto;
  margin: auto;
  margin: 50px 0;
  gap: 30px;
  line-height: 25px;

  .BestSellerItem {
    background-color: #e3e3e3;
    border: 1px solid white;
    width: 331px;
    height: 420px;
    border: 1px solid white;
    color: white;
    margin: auto;
    margin-top: 30px;
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
export const ProductItemsPage = () => {
  const input = useContext(AppContext);

  // console.log("Input", input);
  const [spraid, setSpraid] = useState(getLocalItem());
  const [query, setQuery] = React.useState(input);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isError, setIsError] = React.useState(false);
  const [sortByPrice, setSortByPrice] = React.useState("asc");
  const [sortByName, setSortByName] = React.useState("asc");
  const [data, setData] = React.useState([]);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedBox, setSelectedBox] = useState({});

 

  const addtoCart = (item) => {
    setSpraid([...spraid, item]);
    alert("Item Added.!");

  };
  useEffect(()=>{

    localStorage.setItem("mensData", JSON.stringify(spraid));
  },[spraid])
  


  const handleClick = (item) => {
    setIsModalVisible(true);
    setSelectedBox(item);
  };

  React.useEffect(() => {
    setIsLoading(true);
    setIsError(false);
    fetchUsers(query || "boAt")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [query]);

  return (
    <div>
      <div>
        <img
          src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Rockerz-_Catgry_web_d201c6e3-e067-4280-a127-56a2e1b51399.jpg?v=1634806683"
          alt="logo"
        />
      </div>
      <div style={{textAlign:"center", marginTop:"40px"}}>
      <Button bg={"red"} color={"white"} margin={"0 10px"} onClick={() => setSortByPrice((prev) => (prev == "desc" ? "asc" : "desc"))}> {sortByPrice === "desc" ?  "Sort By Price(ASD)" :"Sort By Price(DESC)"}</Button>
      <Button bg={"red"} color={"white"} margin={"0 10px"} onClick={() => setSortByName((prev) => (prev == "desc" ? "asc" : "desc"))}>{sortByName === "desc" ?  "Sort By Name(ASD)" :"Sort By Name(DESC)"}</Button>
      </div>
      
      <BestSellerBox style={{margin:"auto"}}>
        {data &&
          data.map((e) => (
            <div key={e.id} className="BestSellerItem">
              
              <div className="BestSellerItemImage" onClick={()=>handleClick(e)} >
                <img src={e.image} alt="logo" />
              </div>

              <div className="BestSellerItemDetails">
                <h1 className="itemTitle">{e.title}</h1>
                <p className="itemRev">
                  {" "}
                  ???{e.rating} | {e.reviews} reviews
                </p>
                <hr />
                <p className="itemDesc">
                  <span style={{ color: "red", fontWeight: "600" }}>
                    ??? {e.dic_price}
                  </span>{" "}
                  <span>
                    <del>??? {e.price}</del>
                  </span>{" "}
                </p>
                <p className="itemSav">
                  You Save: ??? {e.saving} ({e.discount})
                </p>
                <Button w="294px" h="37px" bg="#ff0000" color="white" size="lg"   onClick={() => addtoCart(e)}>
                  ADD TO CART
                </Button>
              </div>
            </div>
          ))}
        <ModalComponent
          data={selectedBox}
          isOpen={isModalVisible}
          setIsOpen={setIsModalVisible}
        />
      </BestSellerBox>
    </div>
  );
};
