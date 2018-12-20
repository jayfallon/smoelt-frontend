import React, { Component } from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Meta from "../Meta/Meta";
import GlobalPageStyles from "../styles/Global/GlobalPageStyles";

const theme = {
	smoeltBlack: "hsla(0, 0%, 7%, 1)",
	smoeltWhite: "hsla(0, 100%, 100%, 1)",
	livingCoral: "hsla(4, 94%, 69%, 1)",
	gray: "hsla(0, 0%, 23%, 1)",
	lightGray: "#hsla(0, 0%, 88%, 1)",
	maxWidth: "130rem",
	padding: "0 10px",
	margin: "0 auto",
	boxShadow: "0 2px 8px 0 hsla(0, 0%, 0%, 0.25)",
};

const MyPageStyle = createGlobalStyle`
	@import url("https://use.typekit.net/spc0stv.css");
	html {
		font-family: trade-gothic-next, sans-serif;
		font-weight: 400;
		font-style: normal;
		font-size: 10px;
		box-sizing: border-box;
	}
	*, *:before, *:after {
		box-sizing: inherit;
	}
	body {
		background-color: ${props => props.theme.smoeltBlack};
		margin: 0;
		padding: 0;
		font-size: 1.5rem;
	}
	a {
		text-decoration: none;
		color: ${theme.black}
	}
`;

const StyledPage = styled.div`
	/* background: pink; */
	color: ${props => props.theme.black};
`;

const Inner = styled.div`
	margin: 0 auto;
	max-width: ${props => props.theme.maxWidth};
	padding: 2rem;
	font-size: 1.6rem;
`;

class Page extends Component {
	render() {
		return (
			<ThemeProvider theme={theme}>
				<StyledPage>
					<GlobalPageStyles />
					<MyPageStyle />
					<Meta />
					<Header />
					<Inner>{this.props.children}</Inner>
					<Footer />
				</StyledPage>
			</ThemeProvider>
		);
	}
}

export default Page;
