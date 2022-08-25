/* eslint-disable jsx-a11y/no-distracting-elements */
import React from "react";
import styled from "styled-components";

const MovingText = styled.div`
    display: flex;
    align-items: center;
    height: 80px;
    background-color: black;
    font-weight: 600;
    font-size: 20px;
    -webkit-text-stroke: 1px white;

    & .bold {
        color: white;
    }
`;

export const TextScroller = ({ children }) => {
    return (
        <MovingText>
            <marquee scrollamount="10">{children}</marquee>
        </MovingText>
    );
};
