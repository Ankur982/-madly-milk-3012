import styled from "styled-components";
import { ProductCard } from "../ProductCard";

const Container = styled.div`
    height: 650px;
    padding-top: 76px;
    padding-bottom: 120px;
    margin-bottom:-40px;

    .category {
        border-bottom: 2px solid white;
        color: white;
        display: flex;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px;
        width: 70%;
        margin: auto;
        justify-content: space-between;
        height: 40px;
        align-items: center;
    }

    .category > span {
        display: flex;
        color: white;
        height: 100%;
        align-items: center;
        padding: 15px;
        background-color: #111111;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
        cursor: pointer;
    }

    .category > span:nth-child(1) {
        background-color: white;
        color: red;
        box-shadow: inset 0px -1px 0px 0px red;
    }

    .category > span:hover,
    .category > span:active,
    .category > span:focus {
        background-color: white;
        color: red;
        box-shadow: inset 0px -1px 0px 0px red;
    }

    .data-grid {
        display: grid;
        grid-template-columns: auto auto auto;
        justify-content: space-evenly;
        margin-top: 30px;
        row-gap: 70px;
    }
`;

export function ComplexSlider() {
    const temp = [
        {
            id: 23,
            features: [
                "Limitless with ASAP Charge",
                "True Wireless Bluetooth V5.0",
                "INSTA WAKE' n' Pair Technology",
            ],
            name: "boAt Airdopes 402 - Wireless Earbuds",
            category: "WIRELESS EARBUDS",
            rating: 4,
            reviews: 394,
            original_price: 5990,
            discount: 69,
            isAvailable: true,

            image: [
                "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/7925e2ed-89e7-4247-8f27-380ef0178294_720x.png?v=1631104845",
                "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/3b27aa2a-68ce-47db-a975-ffd5543393b6_720x.png?v=1631104857",
                "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/402-main-img_720x.png?v=1631104857",
            ],
            color: ["black", "blue", "white"],
        },
        {
            id: 24,
            features: [
                "Alexa Voice Assistant",
                "1.69 INCHES BIG SQUARE DISPLAY",
                "MULTIPLE WATCH FACES",
            ],
            name: "BOAT‌ Watch Xtend‌",
            category: "SMART WATCHES",
            rating: 4,
            reviews: 29,
            original_price: 7990,
            discount: 56,
            isAvailable: true,

            image: [
                "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main2_529ecf13-c993-4fe7-a2d6-9357f1a47db4_720x.png?v=1623931310",
                "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main1_720x.png?v=1623931310",
                "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main3_1_720x.png?v=1623931310",
            ],
            color: ["black", "green", "blue"],
        },
        {
            id: 25,
            features: [
                "14W boAt Signature Sound",
                "Up to 9H Nonstop Plays",
                "IPX7 Water & Splash Shield",
            ],
            name: "Stone 1200‌",
            category: "BLUETOOTH SPEAKERS",
            rating: 4,
            reviews: 32,
            original_price: 6990,
            discount: 42,
            isAvailable: true,

            image: [
                "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/12d2b457-84fc-4ad2-89cb-5c5c5c0476e2_720x.png?v=1625045905",
                "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/e57bbbe7-5e99-4c43-8cf8-0ddd42caf3d3_720x.png?v=1625045905",
                "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/3e35681e-bcb1-449c-a58a-2d43e8b00bf4_720x.png?v=1625045905",
            ],
            color: ["red", "black", "blue"],
        },
    ];
    return (
        <Container>
            <div className="category">
                <span>Best sellers</span>
                <span>Trending in Earbuds</span>
                <span>Top Smart Watches</span>
                <span>New Launches</span>
                <span>Top Wireless</span>
                <span>Top Wired</span>
            </div>
            <div className="data-grid">
                {temp.map((el) => (
                    <ProductCard key={el._id} el={el}></ProductCard>
                ))}
            </div>
        </Container>
    );
}
