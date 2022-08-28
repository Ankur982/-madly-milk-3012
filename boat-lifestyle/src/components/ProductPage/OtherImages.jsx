import styled from "styled-components";
import leftImage from "./Images/image 117.png";
import rightImage from './Images/image 118.png';

const LeftSection = styled.div`
    position: absolute;
    width: 50%;
    height: 760px;
    left: 0px;
    top: 1273px;
    background: linear-gradient(178.61deg, #EB1D25 28.86%, #BA0F22 99.15%);

    & div {
        position: absolute;
        width: 400px;
        left: 9.80%;
        top: 24px;
    }

    & h2 {
        position: absolute;
        width: 80%;
        height: 49px;
        left: 7.54%;
        top: 448px;
        font-weight: bold;
        font-size: 40px;
        line-height: 49px;
        letter-spacing: 0.01em;
        color: #FFFFFF;
    }

    & p {
        position: absolute;
        width: 80%;
        height: 48px;
        left: 7.54%;
        top: 516px;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0.01em;
        color: #FFFFFF;
    }
`;

const RightSection = styled.div`
    position: absolute;
    width: 50%;
    height: 760px;
    left: 50%;
    top: 1273px;
    background: linear-gradient(155.41deg, #292929 9.54%, #010101 87.57%);

    & h2 {
        position: absolute;
        width: 87.02%;
        height: 98px;
        left: 6.18%;
        top: 54px;
        font-weight: bold;
        font-size: 40px;
        line-height: 49px;
        letter-spacing: 0.01em;
        color: #ffffff;
    }

    & p {
        position: absolute;
        width: 76.67%;
        height: 72px;
        left: 6.78%;
        top: 169px;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0.01em;
        color: #FFFFFF;
    }

    & img {  
        position: absolute;
        width: 480px;
        height: 493px;
        left: 9.80%;
        top: 248px;
    }
`;
export default function OtherImages() {
    return (
        <>
            <LeftSection>
                <div><img src={leftImage} alt="left"/></div>
                <h2>Upto 9H Nonstop Plays</h2>
                <p>Power yourself through 9 hours of immersive listening. Be the life of every party!</p>
            </LeftSection>
            <RightSection>
                <h2>14W boAt Signature Sound with Passive Bass Radiator</h2>
                <p>14W stereo sound gives the right bass and clarity to your music.It delivers excellent stereo sound designed by acoustic experts for a complete immersive listening experience</p>
                <div><img src={rightImage} alt="right"/></div>
            </RightSection>
        </> 
    );
}