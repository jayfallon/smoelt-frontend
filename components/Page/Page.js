import React, { Component } from "react";
import { ThemeProvider } from "styled-components";
import Meta from "../Meta/Meta";

const theme = {
	smoeltLogo: "url(/static/images/smoelt-logo.png)",
	smoeltLogoDash: "url(/static/images/smoelt-logo-dash.png)",
	smoeltBlack: "hsla(0, 0%, 7%, 1)",
	darkGray: "hsla(0, 0%, 14%, 1)",
	gray: "hsla(0, 0%, 23%, 1)",
	medGray: "${props => props.theme.medGray}",
	lightGray: "hsla(0, 0%, 88%, 1)",
	smoeltWhite: "hsla(0, 100%, 100%, 1)",
	offWhite: "hsla(0, 0%, 97%, 1)",
	livingCoral: "hsla(4, 94%, 69%, 1)",
	fontNormal: "GothamBook, sans-serif",
	fontBold: "GothamBold, sans-serif",
	maxWidth: "130rem",
	padding: "0 10px",
	margin: "0 auto",
	boxShadow: "0 2px 8px 0 hsla(0, 0%, 0%, 0.25)",
};

class Page extends Component {
	render() {
		return (
			<ThemeProvider theme={theme}>
				<>
					<Meta />
					{this.props.children}
				</>
			</ThemeProvider>
		);
	}
}

export default Page;
