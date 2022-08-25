import SimpleImageSlider from "react-simple-image-slider";


const images = [
    { url: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/3_21b623c5-81b3-403a-b73d-f123f89c04cd.jpg?v=1658911748" },
    { url: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/2_5a3ea459-d27c-49a8-b296-369d66ea2aa6.jpg?v=1658911707" },
    { url: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Vector_Smart_Object_6085a897-ef0f-41c5-9690-3de81a71112f.png?v=1642419136" },
    { url: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Banner-Wave-Select-Desktop_3_2000x.gif?v=1660741182" },
    { url: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/web-banner-shop-now_2_f29ea286-44e1-4022-aa8f-fcd2d3d0bc0c_2000x.jpg?v=1659763025" },
    {url:"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/stone-banner_1_2000x.jpg?v=1659681411"},
];

export const ImageSlider = () => {
    return (
        <div>
            <h1>New Launches</h1>
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
