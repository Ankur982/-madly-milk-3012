import SimpleImageSlider from "react-simple-image-slider";


const images = [
    { url: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Fierce_-Flamboyant_-Fearless_jpg_563x.jpg?v=1651227694" },
    { url: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Radiant_-Rebel_-Trailblazer_jpg_563x.jpg?v=1651227770" },
    { url: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Bold_-Fashionista_-Hustler_jpg_563x.jpg?v=1651227807" },
    { url: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Energetic_-Charming_-Free-Spirit_jpg_563x.jpg?v=1651227851" }
];

export const ImageSlider2 = () => {
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
