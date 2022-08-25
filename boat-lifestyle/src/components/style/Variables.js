import { css } from "styled-components";

const Variables = css`
    :root {
        /* Primary Colors */
        --black: #000000;
        --red: #ff0000;

        /* Supporting Colors */
        --light-black: #111111;

        --darkest-gray: #1c1c1c;
        --dark-gray: #2c2c2c;
        --gray: #e0e0e0 /*#828282*/;
        --light-gray: #c4c4c4 /*#f6f6f6*/;

        --white: #ffffff;
        --ligth-white: #e5e5e5;
        --ligth-light-white: #fafafa;

        --yellow: #fbcd0a;
        --light-red: #ff6a6a;

        /* Error Colors */
        --error: #b70202;

        /* Gradients */

        --black-gradient: linear-gradient(
            155.41deg,
            #292929 9.54%,
            #010101 87.57%
        );
        --red-gradient: linear-gradient(
            166.26deg,
            #ac1616 24.85%,
            #fb0508 92.9%
        );
    }
`;

export default Variables;
