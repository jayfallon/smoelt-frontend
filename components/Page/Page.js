import React, { Component } from "react";
import Header from "../Header/Header";
import Meta from "../Meta/Meta";
import styled, { ThemeProvider, injectGlobal } from "styled-components";

const theme = {
	red: "#F88379",
	black: "#393939",
	grey: "#3A3A3A",
	lightgrey: "#E1E1E1",
	offWhite: "#EDEDED",
	maxWidth: "1280px",
	bs: "0 2px 8px 0 rgba(0, 0, 0, 0.25)",
};

injectGlobal`
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
	background: #fff;
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
					<Meta />
					<Header />
					<Inner>{this.props.children}</Inner>
				</StyledPage>
			</ThemeProvider>
		);
	}
}

export default Page;
