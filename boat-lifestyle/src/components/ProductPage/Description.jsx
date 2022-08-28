import styled from "styled-components";

const Desc = styled.div`
    position: absolute;
    width: 100%;
    height: 376px;
    left: 0px;
    top: 897px;
    background: linear-gradient(180deg, #212121 0%, #282828 37.61%);

    & h3 {
        position: absolute;
        width: 16.59%;
        height: 49px;
        left: 43.74%;
        top: 40px;
        font-weight: bold;
        font-size: 40px;
        line-height: 49px;
        letter-spacing: -0.02em;
        color: #EB2128;
    }

    & p {
        position: absolute;
        width: 85.06%;
        height: 196px;
        left: 7.54%;
        top: 117px;
        font-size: 16px;
        line-height: 178%;
        text-align: center;
        color: #FFFFFF;
    }
`;

export default function Description() {
    return (
        <Desc>
            <h3>Stone 1200</h3>
            <p>it’s time to enjoy a playback experience like never before courtesy boAt stone 1200 14w portal wireless speaker with RCB LEDs. The RGB LEDs pave
the way for making the ambience suit a lot more to the music being played and  set the right vibe! its 14w thumping so sound with passive bass radiator
Offers sheer musical bilss. it supports instant wireless connectivity with bluetooth v5.0. Apart from the wireless connectivity, the user has other
Options in the form of AUX,USB and FM modes as well. The speakers pumps out nonstop audio for up to 9 hours on the single full charge w/o RGB LEDs
and upto 7 hours with the RGB LEDs. it’s a 360 degrees cylindrical construct with IPx7 rated water resistance a carefree listening time and carry strap for
and upto 7 hours with the RGB LEDs. it’s a 360 degrees cylindrical construct with IPx7 rated water resistance a carefree listening time and carry strap for
from those great features, the speaker also supports instant voice assistant via just a single tap</p>
        </Desc>
    );
}