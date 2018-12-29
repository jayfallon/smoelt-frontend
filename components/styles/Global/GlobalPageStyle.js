import { createGlobalStyle } from "styled-components";

const GlobalPageStyle = createGlobalStyle`
    body {
		background-image: url();
        background-color: ${props => props.theme.smoeltBlack};
    }
`;

export default GlobalPageStyle;
