import { useState } from "react";
import styled from "styled-components";
import chatbot1 from "../assets/chatbot1.svg";
import chatbot2 from "../assets/chatbot2.svg";
import chatClose from "../assets/chatClose.svg";

const ChatButton = styled.div`
    display: block;
    background-color: rgb(0, 0, 0);
    background-image: none;
    height: 60px;
    width: 60px;
    left: 94%;
    bottom: 60px;
    z-index: 99999;
    border-radius: 50%;
    box-shadow: 0 5px 40px rgba(0, 0, 0, 0.5) !important;
    cursor: pointer;
    position: fixed;
    right: 20px;
    background-size: 40px;
    background-position: center;
    background-repeat: no-repeat;
    transition: background-image 300ms ease-in-out;

    img {
        background: rgb(0, 0, 0);
        height: 60px;
        width: 60px;
        border-radius: 50%;
        max-width: 100%;
    }
`;

const Chat = styled.div`
    display: block;
    border-radius: 8px;
    bottom: 80%;
    right: 3%;
    position: fixed;
    width: 370px;
    min-width: 320px;
    z-index: 99999;
    background: white;
    box-shadow: 0 5px 40px rgba(0, 0, 0, 0.16) !important;
    line-height: 0.6;
    /* transition: all 0.5s ease; */

    @media screen and (min-width: 1700px) {
        bottom: 72%;
    }

    .heading {
        height: 65px;
        background-color: black;
        color: white;
        padding: 15px 20px;
        position: relative;
        border-radius: 8px 8px 0px 0px;
    }

    .heading > img {
        border-radius: 20px;
        width: 35px;
        height: 35px;
        margin: 0 15px 0 0;
        object-fit: cover;
        float: left;
    }

    .title {
        position: absolute;
        font-weight: 100;
        font-size: 18px;
        left: 65px;
        top: 20px;
    }

    .sub-title {
        position: absolute;
        left: 65px;
        top: 40px;
        font-size: 14px;
    }

    .chat-background {
        background-image: none;
        position: absolute;
        color: #555;
        z-index: 50000;
        background: white;
        font-size: 14px;
        height: 535px;
        width: 100%;
        border-radius: 0px 0px 8px 8px;
    }

    .live-chat {
        position: relative;
        float: left;
        font-weight: 400;
        font-size: 14px;
        text-align: left;
        margin: 10px 10px 0px 50px;
        -webkit-font-smoothing: antialiased;
        min-height: 20px;
        max-width: 75%;
        overflow-wrap: break-word;
        white-space: pre-wrap;
        color: rgb(0, 0, 0);
        background: rgb(236, 240, 241);
        border: 1px solid rgb(255, 255, 255);
        display: -webkit-box;
        padding: 8px 14px;
        border-radius: 10px;
        line-height: 19px;
        min-width: 25px;
        word-break: break-word;
    }

    .chat-background > img {
        position: absolute;
        border-radius: 20px;
        width: 35px;
        height: 35px;
        left: 5px;
        top: 85px;
        border: 1px solid #e0e0e0;
    }

    .chatOptions {
        padding-left: 60px !important;
        padding-right: 0;
        margin-top: 160px;
    }

    button {
        padding: 8px 12px;
        border: 1px solid rgb(24, 23, 23);
        border-radius: 18px;
        color: rgb(0, 0, 0);
        margin: 5px 8px 0px 0px;
        cursor: pointer;
        background: rgb(255, 255, 255);
        font-size: 14px;
        outline: none;
        overflow: hidden;
        text-overflow: ellipsis;
        position: relative;
        width: 285px;
        text-align: center;
    }

    button:hover {
        background-color: var(--red);
        color: var(--white);
    }

    .send-input {
        position: absolute;
        z-index: 999999;
        border-radius: 0 0 8px 8px;
        display: block;
        left: 0;
        height: 90px;
        right: 0;
        bottom: 0;
    }

    .send-input > input {
        border: none;
        padding: 20px 50px 18px 18px;
        outline: 0;
        border-radius: 0;
        font-size: 14px;
        font-weight: 300;
        box-sizing: border-box;
        color: #565867;
        width: 100%;
        position: absolute;
        background: #f9f9f9;
        border-bottom: 1px solid #f1f1f1;
        border-top: 1px solid #f1f1f1;
    }

    .input-actions {
        position: absolute;
        bottom: 15px;
        left: 20px;
        color: #ababab !important;
        text-shadow: 0 2px 0 rgb(255 255 255);
    }

    .icons {
        display: flex;
        position: absolute;
        left: 280px;
        align-items: center;
        top: -5px;
    }

    .icons > img {
        height: 100%;
        padding-right: 20px;
    }
`;

export function Chatbot() {
    const [chat, showChat] = useState(false);
    return (
        <>
            {chat ? (
                <Chat className="chat">
                    <div className="heading">
                        <img
                            src="https://cdn.yellowmessenger.com/4SqmwIeWehBG1604648317025.jpg"
                            alt=""
                        />
                        <div className="title">boAt Lifestyle</div>
                        <div className="sub-title">Plug Into Nirvana</div>
                    </div>
                    <div className="chat-background">
                        <div className="live-chat">
                            Welcome aboard boAthead! How can I help you today?
                        </div>
                        <img
                            src="https://cdn.yellowmessenger.com/4SqmwIeWehBG1604648317025.jpg"
                            alt=""
                        />
                        <div className="live-chat">
                            Note: You can type 'menu' or 'hi' to come back to
                            the main menu
                        </div>
                        <div className="chatOptions">
                            <button classname="chat-buttons">
                                Track My Current Order
                            </button>
                            <button classname="chat-buttons">
                                Find Nearest Service Center
                            </button>
                            <button classname="chat-buttons">
                                Download Invoice
                            </button>
                            <button classname="chat-buttons">
                                Returns and Refunds
                            </button>
                            <button classname="chat-buttons">
                                Warranty & Product Complaints
                            </button>
                            <button classname="chat-buttons">FAQ's</button>
                        </div>
                        <div className="send-input">
                            <input
                                type="text"
                                placeholder="Type your message ..."
                            />
                            <div className="input-actions">
                                <div>⚡️Powered by yellow.ai</div>
                                <span className="icons">
                                    <img src={chatbot1} alt="" />
                                    <img src={chatbot2} alt="" />
                                </span>
                            </div>
                        </div>
                    </div>
                </Chat>
            ) : null}
            <ChatButton className="chat-button" onClick={() => showChat(!chat)}>
                <img
                    src={
                        chat
                            ? chatClose
                            : "https://cdn.yellowmessenger.com/7VHqtdTy4Zv61604648331672.jpg"
                    }
                    alt=""
                />
            </ChatButton>
        </>
    );
}
