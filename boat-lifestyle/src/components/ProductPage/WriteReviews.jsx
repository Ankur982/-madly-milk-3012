import styled from 'styled-components';
import star from './Images/Star 41.png';
import user1 from './Images/image 123.png';
import user2 from './Images/image 150.png';

const Container = styled.div`
    position: absolute;
    width: 100%;
    height: 485px;
    background: #ffffff;
    top: 4680px;
    left: 0px;
    
    & .card {
        position: absolute;
        width: 42.23%;
        height: 240px;
        background: #FFFFFF;
        border: 0.2px solid grey;
        box-sizing: border-box;
    }

    & p:nth-child(1) {
        position: absolute;
        top: 24px;
        font-weight: 600;
        font-size: 14px;
        left: 20px;
        font-size: 14px;
    }

    & p:nth-child(2) {
        position: absolute;
        top: 44px;
        font-weight: 500;
        font-size: 12px;
        left: 22px;
        font-size: 14px;
    }

    & p:nth-child(3) {
        position: absolute;
        top: 81px;
        font-weight: 500;
        font-size: 12px;
        left: 20px;
        font-size: 12px;
    }

    
    & p:nth-child(4) {
        position: absolute;
        top: 208px;
        left: 20px;
    }

    & .card > img {
        position: absolute;
        width: 200px;
        height: 200px;
        left: 326px;
        top: 15px;
    }

    & .first {
        top: 72px;
        left: 6.57%;
    }

    & .second {
        top: 72px;
        left: 53.54%;
    }

    & .paging {
        position: absolute;
        width:15.08%;
        left: 46.38%;
        top: 340px;
        font-weight: 500;
        font-size: 26px;
        line-height: 32px;
        letter-spacing: 0.01em;
        color: #000000;
    }
`;

export default function WriteReviews() {
    return (
        <Container>
            <div className="card first">
                <p>PRADEEP KUMAR MISHRA</p>
                <p>29/09/2021</p>
                <p>Superb... very good performance</p>
                <p><img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                </p>
                <img src={user1} alt="user"/>
            </div>
            <div className="card second">
                <p>SANJAY</p>
                <p>29/09/2021</p>
                <p>Normal Quality</p>
                <p><img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                </p>
                <img src={user2} alt="user"/>
            </div>
            <div className="paging"><p>{'< 1  2  3  4  5...>'}</p></div>
        </Container>
    );
}