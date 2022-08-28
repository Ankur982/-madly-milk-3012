import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

// importing Custom sub-Components
import { Collection, SearchResults } from "./NavHover";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
// importing assets
import logo from "../../assets/boat-logo.svg";
import downArrowIcon from "../../assets/down-arrow-icon.svg";
import searchIcon from "../../assets/search-icon.svg";
import couponIcon from "../../assets/coupon-icon.svg";
import avatarIcon from "../../assets/avatar-icon.svg";
import cartIcon from "../../assets/cart-icon.svg";
import { createContext, useEffect, useState } from "react";

const NavbarContainre = styled.div`
  position: fixed;
  top: 35px;
  width: 100%;
  height: 88px;
  background: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-around;
  z-index: 100;

  span,
  img {
    cursor: pointer;
    color: white;
  }

  & > div:nth-child(1) {
    width: 216px;
  }

  & > div:nth-child(2) {
    width: 390px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    > span:nth-child(1) {
      font-weight: 500;
      font-size: 16px;
      display: flex;
    }

    > span:nth-child(1) img {
      padding: 10px;
      
    }

    > span:nth-child(2) {
      color: white;
      font-weight: 500;
    }

    > span:nth-child(3) {
      color: white;
      font-weight: 500;
    }

    > span:nth-child(4) {
      display: flex;
      font-weight: 500;
    }

    > span:nth-child(4) img {
      padding: 10px;
    }

    img {
      //down tick for shop and more
      margin-bottom: 2px;
    }

    > span {
      font-weight: 200;
      font-size: 15px;
      position: relative;
      transition: all 0.2s ease;
    }

    > span:hover {
      color: red;
    }

    > span::after {
      content: "";
      position: absolute;
      height: 12px;
      width: 1px;
      background: red;
      top: 22%;
      right: -15px;
    }

    > span:nth-child(4)::after {
      display: none;
    }

    > span:nth-child(1) .navbar-collection {
      position: fixed;
      background: #171717;
      width: 100%;
      height: 500px;
      visibility: hidden;
      opacity: 0;
      top: 123px;
      left: 0;
      overflow: scroll;
      border-top: 1px solid transparent;
      z-index: -10;
      transition: all 0.5s ease;
    }

    > span:nth-child(1):hover .navbar-collection {
      visibility: visible;
      opacity: 1;
      /* transition: all 0.5s ease; */
    }
  }

  & > div:nth-child(3) {
    width: 380px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    & img {
      margin-top: 3px;
    }
  }
`;

const SearchBox = styled.div`
    width: 235px;
    height: 36px;
    border-radius: 19px;
    background: var(--white);
    display: flex;
    align-items: center;
    padding: auto 18px;
    font-size: 16px;
    font-weight: 300;
    letter-spacing: 1px;
    position: relative;

    & img {
        margin-left: 18px;
        margin-right: 8px;
    }
    input {
        border: none;
    }

    input ~ .search-results {
        position: fixed;
        width: 235px;
        height: 230px;
        top: 60px;
        background: black-gradient;
        visibility: hidden;
        opacity: 0;
        transition: all 0.2s ease 0.5s;
    }
    input:focus ~ .search-results {
        visibility: visible;
        opacity: 1;
    }
`;
const NavbarSpaceHolder = styled.div`
  height: 88px;
`;



const mystyle = {
  margin: "auto",
  width: "100%",
  height: "35px",
  color: "white",
  textAlign: "center",
  backgroundColor: "#ff0000",
  position: "fixed",
  top: "0px",
  zIndex: 1000,
};

export const AppContext = createContext()

export const Navbar = ({children}) => {
  const [flag, setFlag] = useState(false);
  const [input, setInput] = useState("")
const navigate = useNavigate();

function handlekey(e){
  if(e.key==="Enter"){
    setInput(e.target.value)
    navigate("/productitemspage")
  }
}

  return (
    <>
    <AppContext.Provider value={input}>
    {children}
    </AppContext.Provider>
      <div style={mystyle}>
        <p>All your favourite boAt products at heavy bargains. Shop NOW!</p>
      </div>
      <NavbarContainre>
        <div className="boat-logo">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <div className="nav-links">
          <span>
            Shop <img src={downArrowIcon} alt="arrow-Icon" />
            <Collection className="navbar-collection" />
          </span>
          <span>
          <Link to="/pages/boat-day">boAt Days 2022</Link></span>
          <span>
            <Link to="/pages/offer-zone">Offer Zone</Link>{" "}
          </span>
          <span>
            More <img src={downArrowIcon} alt="arrow-Icon" />
          </span>
        </div>
        <div>
          <InputGroup width={"250px"}>
            <InputLeftElement
              pointerEvents="none"
              children={<SearchIcon color="gray.300" />}
            />
            <Input
              type="tel"
              bg="white"
              color="black"
              borderRadius="50px"
              placeholder="Search Product"
              onKeyDown={(e)=> handlekey(e)}
            />
            <SearchResults/>
          </InputGroup>

          <div>
            <Link to="/coupon">
              <img src={couponIcon} alt="couponIcon" />
            </Link>
          </div>
          <div>
            <Link to="/account/login">
              <img src={avatarIcon} alt="avatarIcon" />
            </Link>
          </div>
          <div>
            <Link to="/cart">
              <img src={cartIcon} alt="cartIcon" />
            </Link>
          </div>
        </div>
      </NavbarContainre>
      <NavbarSpaceHolder></NavbarSpaceHolder>
    </>
  );
};
