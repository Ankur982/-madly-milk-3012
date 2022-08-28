import styled from "styled-components";
import neha from './Images/image 120.png';

const Container = styled.div`
    position: absolute;
    width: 100%;
    height: 669px;
    left: 0px;
    top: 2498px;
    background: linear-gradient(180deg, #780000 0%, #7B0003 100%, #660002 100%);

    & > div {
        position: absolute;
        width: 38.08%;
        height: 414px;
        left: 7.54%;
        top: 127px;
        background: #000000;
    }

    & .leftSpec {
        position: absolute;
        width: 50%;
        top: 32px;
        left: 31px;
        text-align: left;
    }

    & .leftSpec p {
        margin-top: 5px;
        color: #ffffff;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0.01em;
    }

    & .rightSpec {
        position: absolute;
        width: 50%;
        top: 32px;
        left: 50%;
        text-align: left;
    }

    & .rightSpec p {
        margin-top: 5px;
        color: #ffffff;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0.01em;
        font-weight: 600;
    }
`;

const CelebrityImage = styled.div`
    & img {
        position: absolute;
        width: 56.86%;
        height: 816px;
        left: 44.87%;
        top: 2351px;
    }
`;

export default function Celebrity() {
    return (
        <>
        <Container>
            <div>
                <div className="leftSpec">
                    <p>Speaker Type</p>
                    <p>IPX Rating</p>
                    <p>Driver Size</p>
                    <p>Impedance</p>
                    <p>Sensititvity (db)</p>
                    <p>Frequentlt Response</p>
                    <p>Changing Time</p>
                    <p>Bluetooth Version</p>
                    <p>Country of Origin</p>
                    <p>Compatibility</p>
                    <p>Bluetooth Range</p>
                </div>
                <div className="rightSpec">
                    <p>Poratble Wireless Speaker</p>
                    <p>IPX7</p>
                    <p>76mm* 2 Drivers</p>
                    <p>6Q</p>
                    <p>75DB+DB</p>
                    <p>100Hz-20Hz</p>
                    <p>4 Hours</p>
                    <p>V5.0</p>
                    <p>China</p>
                    <p>All Bluetooth Devices</p>
                    <p>10M</p>
                </div>
            </div>
            </Container>
            <CelebrityImage>
                <img src={neha} alt="neha"/>
            </CelebrityImage>
        </>
    );
}