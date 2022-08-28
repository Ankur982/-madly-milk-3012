import { createGlobalStyle } from "styled-components";
import Variables from "./Variables";

const GlobalStyle = createGlobalStyle`
    ${Variables};

    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

    *, *::before, *::after{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
        text-decoration: none;
    }

    body{
        font-family: 'Montserrat', sans-serif;

        z-index: -1;
        

        background: var(--black);

    }
    a{
        color: inherit;
    }

    button{
        cursor: pointer;
    }

   

`;

export default GlobalStyle;
