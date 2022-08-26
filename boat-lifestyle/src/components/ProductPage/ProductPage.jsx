import TopProductDisplay from "./TopProductDisplay";
import Description from "./Description";
import OtherImages from "./OtherImages";
import SplashShield from "./SplashShield";
import Celebrity from "./Celebrity";
import Warranty from "./Warranty";
import Faq from "./Faq";
import Reviews from "./Reviews";
import WriteReviews from "./WriteReviews";
import styled from "styled-components";
import { useLayoutEffect } from "react";

const ProductContainer = styled.div`
    margin-bottom: 4450px;
`;

export default function ProductPage() {
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <ProductContainer>
            <TopProductDisplay />
            <Description />
            <OtherImages />
            <SplashShield />
            <Celebrity />
            <Warranty />
            <Faq />
            <Reviews />
            <WriteReviews />
        </ProductContainer>
    );
}
