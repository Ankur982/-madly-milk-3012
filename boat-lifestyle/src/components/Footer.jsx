import styled from "styled-components";
import truck from "../assets/truck-icon.svg";
import deals from "../assets/deals-icon.svg";
import secure from "../assets/secure-icon.svg";
import boat from "../assets/boat.png";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import linkedin from "../assets/linkedin.svg";
import twitter from "../assets/twitter.svg";
import youtube from "../assets/youtube.svg";

import { TextScroller } from "./TextScroller";

const Foot = styled.div`
    width: 100%;
    margin-bottom: 50px;
    background-color: black;
`;

const Deals = styled.div`
    background-color:#141414;
    width:100%;
    height:250px;
    padding-top:50px;

    .deal_txt{
        font-size:35px;
        font-weight: 700;
        color:white;
    }
    .cont {
        height: 100%;
        display: flex;
        color: white;
        font-weight: 700;
        font-size: 16px;
        line-height: 24.38px;
        align-items: center;
        justify-content: space-around;
        max-width: 901px;
        margin: auto;
        flex-wrap: wrap;
        padding-bottom: 50px;
    }

    .cont > div {
        display: flex;
        align-items: center;
    }

    img {
        height: 40px;
        margin-right: 10px;
    }
`;

const Text = styled.div`
    background-color:#2c2c2c ;
    padding: 20px 20px;
    color: #8f8f8f;
    font-size: 13px;
    line-height: normal;
    margin: 0 auto;
    text-align: center;
    font-weight: 500;
`;

const Bottom = styled.div`
    background-color: var(--black);
    max-width: 1200px;
    margin: 30px auto 0;
    color: white;

    .container {
        display: flex;
        flex-wrap: wrap;
        margin-right: -15px;
        margin-left: -15px;
    }

    img {
        height: 45px;
    }

    img:hover {
        opacity: 0.7;
    }

    .container > div {
        padding: 0px 15px 0px 15px;
    }

    .logo {
        margin-top: 10px;
        cursor: pointer;
    }

    .text-input > div:nth-of-type(1) {
        font-size: 14px;
        margin-bottom: 15px;
        opacity: 0.8;
        line-height: normal;
        margin-top: 24px;
        margin-bottom: 15px;
    }

    .text-input input {
        border: 0.8px solid #787878;
        color: #787878;
        font-size: 12px;
        font-weight: 400;
        max-width: 237px;
        background: 0 0;
        border-radius: 5px;
        line-height: 1.2em;
        padding: 11px 15px;
        width: 300px;
        margin-right: 5px;
    }

    .text-input button {
        background: 0 0;
        color: #fff;
        border-radius: 5px;
        font-size: 13px;
        border: 1px solid red;
        line-height: 1em;
        height: auto;
        padding: 11px 25px;
    }

    .text-input button:hover {
        background-color: red;
    }

    ul li {
        list-style: none;
    }

    .links {
        flex: 0 0 66.666667%;
        max-width: 66.666667%;
        width: 100%;
        display: flex;
    }

    .links > div {
        display: inline-block;
        width: 32%;
        font-size: 14px;
    }

    .list-main > li {
        font-weight: 700;
        font-size: 18px;
        padding: 10px;
    }

    .list-main > ul > li {
        display: block;
        padding: 5px 10px;
        opacity: 0.8;
        font-size: 13px;
        letter-spacing: 0.8px;
        font-weight: 400;
        cursor: pointer;
    }

    .list-main > ul > li:hover {
        opacity: 0.7;
    }

    .socials > div:nth-of-type(1) {
        margin-top: 24px;
    }

    .socials > div:nth-of-type(2) > div:nth-of-type(1) {
        padding: 0px 15px;
    }

    .socials {
        width: 100%;
    }

    .socials > div {
        padding-left: 15px;
        padding-right: 15px;
        display: flex;
        flex-wrap: wrap;
    }

    .socials > div > div {
        padding: 5px 10px 5px 10px;
        cursor: pointer;
    }

    .payment-image {
        cursor: auto;
    }

    .payment-image:hover {
        opacity: 1;
    }

    .download-box {
        display: flex;
        flex-grow: 1;
        align-items: center;
        padding: 0px 15px;
        justify-content: center;
        padding-top: 0px !important;
        padding-bottom: 0px !important;
    }

    .download-box:hover {
        cursor: auto;
    }

    .download-box > p,
    .download-box > img {
        margin: 0px 5px;
    }

    .download-box > img {
        height: 100%;
    }

    .download-box > img:hover {
        opacity: 1 !important;
        cursor: pointer;
    }

    .download-box > p {
        margin-right: 20px;
        font-weight: 700;
    }

    .copyright {
        font-size: 12px;
        line-height: normal;
        display: block;
        margin-top: 25px;
        width: 100%;
        text-align: center;
    }
`;

export function Footer() {
    return (
        <Foot>
            <TextScroller>
                <span>India’s No.1 Earwear Audio Brand.&nbsp; </span>
                <span>India’s No.1 Earwear Audio Brand.&nbsp;</span>
                <span className="bold">
                    India’s No.1 Earwear Audio Brand.&nbsp;{" "}
                </span>
                <span>India’s No.1 Earwear Audio Brand.&nbsp; </span>
                <span>India’s No.1 Earwear Audio Brand. &nbsp;</span>
                <span className="bold">
                    India’s No.1 Earwear Audio Brand.&nbsp;{" "}
                </span>
                <span>India’s No.1 Earwear Audio Brand.&nbsp; </span>
                <span>India’s No.1 Earwear Audio Brand.&nbsp; </span>
                <span className="bold">
                    India’s No.1 Earwear Audio Brand.&nbsp;{" "}
                </span>
                <span>India’s No.1 Earwear Audio Brand.&nbsp; </span>
            </TextScroller>
            <Deals>
            <p className="deal_txt">Brand Promise</p>
                <div className="cont">
                
                    <div>
                        <img src={truck} alt="" />
                        <div>Free Shipping</div>
                    </div>
                    <div>
                        <img src={deals} alt="" />
                        <div>Exclusive Deals</div>
                    </div>
                    <div>
                        <img src={secure} alt="" />
                        <div>Secure Checkout</div>
                    </div>
                </div>
            </Deals>
            <Text>
                <p>
                    India's fastest growing audio & wearables brand. The most
                    incredible range of wireless earphones, earbuds, headphones,
                    smart watches, and home audio. <br /> From workouts to
                    adventures, boAt will get you sailing!
                </p>
            </Text>
            <Bottom>
                <div className="container">
                    <div>
                        <div>
                            <div className="logo">
                                <img src={boat} alt="" />
                            </div>
                        </div>
                        <div className="text-input">
                            <div>
                                Subscribe to email alerts. We promise not to
                                spam your <br />
                                inbox.
                            </div>

                            <div>
                                <input
                                    type="email"
                                    placeholder="Email Address*"
                                />
                                <button>SUBSCRIBE</button>
                            </div>
                        </div>
                    </div>
                    <div className="links">
                        <div>
                            <ul className="list-main">
                                <li>SHOP</li>
                                <ul>
                                    <li>True Wireless Earbuds</li>
                                    <li>Wireless Headphones</li>
                                    <li>Wired Headphones</li>
                                    <li>Wireless Speakers</li>
                                    <li>Home Audio</li>
                                    <li>Mobile Accessories</li>
                                    <li>Smart Watches</li>
                                    <li>TRebel</li>
                                    <li>Misfit</li>
                                    <li>Gift Card</li>
                                    <li>Rock in India</li>
                                    <li>Earn Rs.100</li>
                                </ul>
                            </ul>
                        </div>
                        <div>
                            <ul className="list-main">
                                <li>HELP</li>
                                <ul>
                                    <li>Track Your Order</li>
                                    <li>Warranty & Support</li>
                                    <li>Return Policy</li>
                                    <li>Services Centres</li>
                                    <li>Bulk Orders</li>
                                    <li>FAQs</li>
                                    <li>Why Buy Direct</li>
                                </ul>
                            </ul>
                        </div>
                        <div>
                            <ul className="list-main">
                                <li>COMPANY</li>
                                <ul>
                                    <li>About boAt</li>
                                    <li>News</li>
                                    <li>Read Our Blog</li>
                                    <li>Social Responsibility</li>
                                    <li>High5boAtheads</li>
                                    <li>Our Partners</li>
                                    <li>Terms of services</li>
                                    <li>Privacy Policy</li>
                                </ul>
                            </ul>
                        </div>
                    </div>
                    <div className="socials">
                        <div>
                            <div>
                                {" "}
                                <img
                                    src={twitter}
                                    width="23px"
                                    height="23px"
                                    alt=""
                                />{" "}
                            </div>
                            <div>
                                {" "}
                                <img
                                    src={facebook}
                                    width="23px"
                                    height="23px"
                                    alt=""
                                />{" "}
                            </div>
                            <div>
                                {" "}
                                <img
                                    src={youtube}
                                    width="23px"
                                    height="23px"
                                    alt=""
                                />{" "}
                            </div>
                            <div>
                                {" "}
                                <img
                                    src={instagram}
                                    width="23px"
                                    height="23px"
                                    alt=""
                                />{" "}
                            </div>
                            <div>
                                {" "}
                                <img
                                    src={linkedin}
                                    width="23px"
                                    height="23px"
                                    alt=""
                                />{" "}
                            </div>
                        </div>
                        <div>
                            <div>
                                <img
                                    className="payment-image"
                                    src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Fotter_payment_icn_2_720x.png?v=1632725578"
                                    alt=""
                                />
                            </div>
                            <div className="download-box">
                                <p>DOWNLOAD THE APP</p>
                                <img
                                    src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/google-play.png?v=1608620293"
                                    alt=""
                                />
                                <img
                                    src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/app-store.png?v=1608620293"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                    <div className="copyright">
                        <span>
                            {" "}
                            © 2021 Imagine Marketing Private Limited. All Rights
                            Reserved.{" "}
                        </span>
                    </div>
                </div>
            </Bottom>
        </Foot>
    );
}
