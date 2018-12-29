import { createGlobalStyle } from "styled-components";

const GlobalPageStyle = createGlobalStyle`
    body {
        background-color: ${props => props.theme.smoeltBlack};
		background-image: url(/static/images/none.png);
    }
`;

export default GlobalPageStyle;
