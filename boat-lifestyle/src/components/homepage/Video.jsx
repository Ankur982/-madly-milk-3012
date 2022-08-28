import styled from "styled-components";
import video from "../../assets/digital_20_new.mp4";
import { TextScroller } from "../TextScroller";

const VideoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Video = () => {
    return (
        <>
            <TextScroller>
                <span>India’s No.1 Earwear Audio Brand.&nbsp; </span>
                <span>India’s No.1 Earwear Audio Brand.&nbsp;</span>
                <span className="bold">
                    India’s No.1 Earwear Audio Brand.&nbsp;{" "}
                </span>
                <span>India’s No.1 Earwear Audio Brand.&nbsp; </span>
                <span>India’s No.1 Earwear Audio Brand. &nbsp;</span>
                <span className="bold">
                    India’s No.1 Earwear Audio Brand.&nbsp;{" "}
                </span>
                <span>India’s No.1 Earwear Audio Brand.&nbsp; </span>
                <span>India’s No.1 Earwear Audio Brand.&nbsp; </span>
                <span className="bold">
                    India’s No.1 Earwear Audio Brand.&nbsp;{" "}
                </span>
                <span>India’s No.1 Earwear Audio Brand.&nbsp; </span>
            </TextScroller>
            <VideoContainer>
                <p>hello</p>
                <video
                    src={video}
                    width="90%"
                    controls
                    loop
                    autoPlay
                    muted
                ></video>
            </VideoContainer>
        </>
    );
};
