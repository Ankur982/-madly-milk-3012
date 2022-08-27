import { Link } from "react-router-dom";
import { Chatbot } from "./Chatbot";

export function Errors() {
    return (
        <>
            <Link to="/">
                <img
                    width="100%"
                    src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/404.png?v=1620023756"
                    alt=""
                />
            </Link>
            <Chatbot />
        </>
    );
}
