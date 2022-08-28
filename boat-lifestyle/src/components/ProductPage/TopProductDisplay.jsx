import styled from "styled-components";
import zest from "./Images/image 115.png";
import star from "./Images/Star11.png";
import warranty from "./Images/image 116.png";
import { useEffect, useState } from "react";
import tick from "./Images/VectorTick.png";
import { useParams } from "react-router";
import axios from "axios";

const Container = styled.div`
    height: 600px;
    width: 100%;
    top: 88px;
    left: 0px;
    background: linear-gradient(184.1deg, #292929 -0.53%, #010101 108.73%);

    & .topImage {
        display: flex;
        margin-left: 7.54%;
        margin-top: 0px;
        width: 500px;
        height: 500px;
    }

    & .imageDiv {
        margin-top: 150px;
        margin-left: 15px;
        width: 283px;
        height: 283px;
        border-radius: 141.5px;
        background: gray;
        margin-left: 60px;
    }

    & .imageDiv img {
        width: 350px;
        margin-left: -35px;
        margin-top: -35px;
    }

    & .imageDiv img {
        -webkit-animation: mover 1s infinite alternate;
        animation: mover 1s infinite alternate;
    }
    @-webkit-keyframes mover {
        0% {
            transform: translateY(0);
        }
        100% {
            transform: translateY(-10px);
        }
    }
    @keyframes mover {
        0% {
            transform: translateY(0);
        }
        100% {
            transform: translateY(-10px);
        }
    }

    & .leftButton {
        width: 0px;
        height: 0px;
        margin-left: 0;
        margin-top: 269px;
        border-top: 14px solid transparent;
        border-bottom: 14px solid transparent;
        border-right: 20px solid #ff0000;
    }

    & .rightButton {
        width: 0px;
        height: 0px;
        margin-top: 269px;
        margin-left: 60px;
        border-left: 20px solid #ff0000;
        border-top: 14px solid transparent;
        border-bottom: 14px solid transparent;
    }

    & .name {
        position: absolute;
        width: 36.81%;
        overflow-y: hidden;
        height: 49px;
        left: 60.97%;
        top: 177px;
        font-weight: 600;
        font-size: 40px;
        line-height: 49px;
        color: #ffffff;
    }

    & .type {
        position: absolute;
        width: 35%;
        overflow-y: hidden;
        height: 37px;
        left: 60.97%;
        top: 231px;
        font-weight: 600;
        font-size: 30px;
        line-height: 37px;
        color: #7c7c7c;
    }

    & .pricing {
        position: absolute;
        top: 360px;
        left: 60.97%;
        display: flex;
    }

    & .price {
        width: 150px;
        height: 49px;
        font-weight: 600;
        font-size: 35px;
        line-height: 49px;
        color: #ff0000;
    }

    & .discountPrice {
        width: 100px;
        height: 32px;
        margin-left: 30px;
        margin-top: 10px;
        font-size: 25px;
        line-height: 32px;
        text-decoration-line: line-through;
        color: #b4b4b4;
    }

    & .save {
        position: absolute;
        width: 200px;
        height: 29px;
        left: 60.97%;
        top: 417px;
        font-size: 24px;
        line-height: 29px;
        color: #b4b4b4;
    }

    & .tax {
        position: absolute;
        width: 250px;
        height: 20px;
        left: 60.97%;
        top: 448px;
        font-size: 16px;
        line-height: 20px;
        color: #b4b4b4;
    }
    & .starContainer {
        position: absolute;
        display: flex;
        width: 300px;
        left: 60.97%;
        top: 271px;
    }
    & .star {
        display: flex;
        width: 60px;
    }

     & .reviews {
        width: 100px;
        height: 12px;
        margin-left: 10px;
        top: 272px;
        font-size: 10px;
        line-height: 12px;
        color: #9b9b9b;
    }

    & .zestContainer {
        position: absolute;
        top: 474px;
        left: 60.97%;
        display: flex;
    }

    & .internet {
       
        width: 300px;
        height: 20px;
   
       
        font-size: 16px;
        line-height: 20px;
        color: #b4b4b4;
    }

    & .zest {
        width: 60px;
        height: 16px;
    }

    & .addToCart,
    .buyItNow {
        position: absolute;
        width: 10.85%;
        height: 39px;
        left: 60.97%;
        top: 520px;
        border: 1px solid #ffffff;
        color: white;
        line-height: 17px;
        font-size: 14px;
        background-color: transparent;
        box-sizing: border-box;
        border-radius: 4px;
    }

    & .buyItNow {
        left: 73.41%;
    }

    & .addToCart:hover,
    .buyItNow:hover {
        background-color: #ff0000;
        border: none;
    }

    & .colorCircle {
        position: absolute;
        left: 60.76%;
        top: 305px;
        border-radius: 14px;
        box-sizing: border-box;
        display: flex;
    }

    & .colorCircle > div {
        padding: 5px;
        width: 28px;
        height: 28px;
        border-radius: 14px;
        margin-right: 15px;
    }

    & .warranty {
        position: absolute;
        width: 100%;
        height: 86px;
        left: 0px;
        top: 688px;
        background: #2c2c2c;
    }

    .warrantyImage {
        position: absolute;
        width: 40.49%;
        height: 98px;
        left: 60.55%;
        top: 688px;
    }

    & .whiteDiv {
        position: absolute;
        width: 100%;
        height: 123px;
        left: 0px;
        top: 774px;
        background: #f6f6f6;
    }

    & .whiteDiv .experience {
        position: absolute;
        width: 19%;
        height: 88px;
        left: 11.46%;
        top: 25px;
        font-weight: bold;
        font-size: 36px;
        line-height: 44px;
        color: #000000;
    }

    & .uninterrupted {
        position: absolute;
        width: 10.85%;
        height: 72px;
        left: 41.25%;
        top: 20px;
        font-weight: 600;
        font-size: 20px;
        line-height: 24px;
        letter-spacing: -0.02em;
        color: #000000;
    }

    & .ipx7 {
        position: absolute;
        width: 7.91%;
        height: 48px;
        left: 63.19%;
        top: 25px;
        font-weight: 600;
        font-size: 20px;
        line-height: 24px;
        letter-spacing: -0.02em;
        color: #000000;
    }

    & ._14W {
        position: absolute;
        width: 7.23%;
        height: 96px;
        left: 83.4%;
        top: 20px;
        font-weight: 600;
        font-size: 20px;
        line-height: 24px;
        letter-spacing: -0.02em;
        color: #000000;
    }
`;

export default function TopProductDisplay() {
    const [btn, setBtn] = useState("ADD TO CART");
    const { productName } = useParams();

    const temp = {
        id: 50,
        features: [
            "Dual Connectivity Mode",
            "Driverless 3D Spatial Sound",
            "boAt Signature Music Mode",
        ],
        name: "boAt Immortal 1300",
        category: "IMMORTAL GAMING",
        rating: 5,
        reviews: 5,
        original_price: 9990,
        discount: 77,
        isAvailable: true,

        image: [
            "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/IM1300_main_3_720x.png?v=1632893188",
            "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/IM1300_main_2_720x.png?v=1632893182",
            "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/IM1300_main_1_720x.png?v=1632893177",
        ],
        color: ["black", "red", "white"],
    };

    const [e, setE] = useState(temp);

    const getData = async () => {
        const res = await axios.get("http://localhost:3000/products");
        const temp = res.data;
        const ele = temp.filter((el) => el.name === productName);
        setE(ele[0]);
    };
    console.log(e);
    useEffect(() => {
        getData();
    }, []);

    const starsArray = new Array(e.rating).fill(0);
    const [index, setIndex] = useState(0);
    console.log(e.rating);
    const changeImage = (k) => {
        if (index === 0 && k === -1) {
            setIndex(e.image.length - 1);
            return;
        }
        const newIndex = (k + index) % e.image.length;
        setIndex(newIndex);
    };

    const changeImageCircle = (k) => {
        setIndex(k);
    };

    const addToCart = async () => {
        setBtn("ADDED TO CART");
        const id = localStorage.getItem("id");
        const res = await axios.get(`http://localhost:3000/users/${id}`);
        const user = res.data;
        user.cart.push(e);
        await axios.patch(`http://localhost:3002/users`, {
            _id: id,
            cart: user.cart
        })
    }
    return (
        <Container>
            <div className="topImage">
                <div
                    className="leftButton"
                    onClick={() => changeImage(-1)}
                ></div>
                <div className="imageDiv">
                    <div className="circle">
                        <img src={e.image[index]} alt="stone1200" />
                    </div>
                </div>
                <div
                    className="rightButton"
                    onClick={() => changeImage(1)}
                ></div>
            </div>
            <div className="rigthSection">
                <p className="name">{e.name}</p>
                <p className="type">{e.category}</p>
                <div className="starContainer">
                    <div className="star">
                        {starsArray.map((el, i) => {
                            return <img src={star} alt="star" />;
                        })}
                    </div>
                <p className="reviews">{e.reviews} Reviews</p>
                </div>
                <div className="colorCircle">
                    {e.color.map((el, i) => (
                        <div
                            onClick={() => changeImageCircle(i)}
                            style={{ background: el }}
                        >
                            <img
                                src={tick}
                                style={{ opacity: index !== i ? "0" : "1" }}
                                alt="tick"
                            />
                        </div>
                    ))}
                </div>
                <div className="pricing">
                    <p className="price">
                        ₹{Math.floor((e.original_price / 100) * e.discount)}.00
                    </p>
                    <p className="discountPrice">
                        ₹{e.original_price}
                        .00
                    </p>
                </div>
                <p className="save">You save {e.discount}%</p>
                <p className="tax">Inclusive all Tax</p>
                <div className="zestContainer">
                    <p className="internet">
                        Or a internet free payment of 1160 with{" "}
                    </p>
                    <img className="zest" src={zest} alt="zest" />
                </div>
                <button className="addToCart" onClick={addToCart}>{btn}</button>
                <button className="buyItNow">BUY IT NOW</button>
            </div>
            <div className="warranty"></div>
            <img className="warrantyImage" src={warranty} alt="warranty" />
            <div className="whiteDiv">
                <p className="experience">EXPERIENCE THE MAGIC</p>
                <p className="uninterrupted">
                    Uninterrupted music upto 9 hours
                </p>
                <p className="ipx7">Ipx7 water resistant</p>
                <p className="_14W">14W BOAT signature sound</p>
            </div>
        </Container>
    );
}
