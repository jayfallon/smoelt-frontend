import { createGlobalStyle } from "styled-components";

const GlobalLoginStyle = createGlobalStyle`
    body {
        background-image: url(/static/images/matthew-henry-25963-unsplash.png);
        background-repeat: no-repeat;
        background-position: center top -200px;
        background-color: ${props => props.theme.boseBlack};
        color: ${props => props.theme.boseRed};
        height: 100vh;
    }
`;

export default GlobalLoginStyle;
