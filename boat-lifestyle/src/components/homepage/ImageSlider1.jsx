import SimpleImageSlider from "react-simple-image-slider";


const images = [
    { url: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/banner-shop-now_2_2000x.gif?v=1661324429" },
    { url: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/banner-web_2000x.png?v=1661359177" },
    { url: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/deal-of-the-day-aug-2_2000x.jpg?v=1660912362" },
    { url: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Banner-Wave-Select-Desktop_3_2000x.gif?v=1660741182" },
    { url: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/web-banner-shop-now_2_f29ea286-44e1-4022-aa8f-fcd2d3d0bc0c_2000x.jpg?v=1659763025" },
    {url:"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/stone-banner_1_2000x.jpg?v=1659681411"},
];

export const ImageSlider = () => {
    return (
        <div>
            <SimpleImageSlider
                width={"100%"}
                height={500}
                images={images}
                showBullets={false}
                showNavs={true}
                style={{ cursor: "pointer" }}
                navSize={60}
                navMargin={20}
                slideDuration={0.5}
                autoPlay
            />
        </div>
    );
};
