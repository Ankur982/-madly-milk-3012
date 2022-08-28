import styled from "styled-components";
import star from './Images/Star 11.png';
import hollowStar from './Images/Star 15.png';

const Container = styled.div`
    position: absolute;
    width: 100%;
    height: 280px;
    left: 0px;
    top: 4401px;
    background: #FFFFFF;
    box-sizing: border-box;

  & p {
        position: absolute;
        width: 24%;
        height: 29px;
        left: 6.74%;
        top: 37px;
        font-weight: 600;
        font-size: 24px;
        line-height: 29px;
        text-align: center;
        letter-spacing: 0.01em;
  }

   & .starContainer {
       position: absolute;
       left: 6.74%;
       top: 88px;
   }

   & .starContainer div {
       display: flex;
       margin-top: 4px;
   }

   & .starContainer div .bar .greyBar{
        width: 22.73px;
        height: 11px;
        background: #cccccc;
   }

   & .starContainer .bar {
       margin-left: 20px;
   }

   & .starContainer div .bar .yellowBar{
        width: 101.27px;
        height: 11px;
        background: #fbcd0a;
   }

   & button {  
    position: absolute;
    left: 81.52%;
    width: 159px;
    height: 37px;
    top: 24px;
    background: #FF0000;
    border-radius: 4px;
    border: none;
    font-weight: 600;
    font-size: 15px;
    line-height: 18px;
    color: #FFFFFF;
   }

   & .recent {
        position: absolute;
        width: 10.48%;
        height: 37px;
        left: 81.52%;
        top: 224px;
        border: 1px solid #000000;
        box-sizing: border-box;
        border-radius: 4px;
        padding: 10px;
        font-size: 15px;
        display: flex;
   }

   & .recent div {
       width: 0px;
       height: 0px;
       border-top: 9px solid black;
       border-right: 9px solid transparent;
       border-left: 9px solid transparent;
       margin-left: 7px;
       margin-top: 6px;
   }
`;

export default function Reviews() {
    return (
        <Container>
            <p>What boAtheads are saying</p>\
            <div className="starContainer">
                <div>
                    <div className="star">
                        <img src={star} alt="star"/>
                        <img src={star} alt="star"/>
                        <img src={star} alt="star"/>
                        <img src={star} alt="star"/>
                        <img src={star} alt="star"/>
                    </div>
                    <div class="bar">
                        <div className="yellowBar"></div>
                        <div className="greyBar"></div>
                    </div>
                </div>
                  <div>
                    <div className="star">
                        <img src={star} alt="star"/>
                        <img src={star} alt="star"/>
                        <img src={star} alt="star"/>
                        <img src={star} alt="star"/>
                        <img src={hollowStar} alt="star"/>
                    </div>
                    <div class="bar">
                        <div className="yellowBar"></div>
                        <div className="greyBar"></div>
                    </div>
                </div>
                  <div>
                    <div className="star">
                        <img src={star} alt="star"/>
                        <img src={star} alt="star"/>
                        <img src={star} alt="star"/>
                        <img src={hollowStar} alt="star"/>
                        <img src={hollowStar} alt="star"/>
                    </div>
                    <div class="bar">
                        <div className="yellowBar"></div>
                        <div className="greyBar"></div>
                    </div>
                </div>
                  <div>
                    <div className="star">
                        <img src={star} alt="star"/>
                        <img src={star} alt="star"/>
                        <img src={hollowStar} alt="star"/>
                        <img src={hollowStar} alt="star"/>
                        <img src={hollowStar} alt="star"/>
                    </div>
                    <div class="bar">
                        <div className="yellowBar"></div>
                        <div className="greyBar"></div>
                    </div>
                </div>
                  <div>
                    <div className="star">
                        <img src={star} alt="star"/>
                        <img src={hollowStar} alt="star"/>
                        <img src={hollowStar} alt="star"/>
                        <img src={hollowStar} alt="star"/>
                        <img src={hollowStar} alt="star"/>
                    </div>
                    <div class="bar">
                        <div className="yellowBar"></div>
                        <div className="greyBar"></div>
                    </div>
                </div>
            </div>
            <button>Write a Review</button>
            <div className="recent">Most Recent
                <div></div>
            </div>
        </Container>
    );
}