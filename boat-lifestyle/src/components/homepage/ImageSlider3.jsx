import SimpleImageSlider from "react-simple-image-slider";
import styled from "styled-components";
import img1 from "../../assets/slider2-img-1.svg";
import img2 from "../../assets/slider2-img-2.svg";
import img3 from "../../assets/slider2-img-3.svg";

const images = [{ url: img1 }, { url: img2 }, { url: img3 }];

const Slider2 = styled.div`
    margin-top: 100px;
`;

export const ImageSlider3 = () => {
    return (
        <Slider2>
            <SimpleImageSlider
                width={"100%"}
                height={"514px"}
                images={images}
                showBullets={false}
                showNavs={true}
                style={{ cursor: "pointer" }}
                navSize={60}
                navMargin={20}
            />
        </Slider2>
    );
};
