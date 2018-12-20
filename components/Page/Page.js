import React, { Component } from "react";
import { ThemeProvider } from "styled-components";
import Meta from "../Meta/Meta";
import GlobalPageStyle from "../styles/Global/GlobalPageStyle";

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

class Page extends Component {
	render() {
		return (
			<ThemeProvider theme={theme}>
				<>
					<GlobalPageStyle />
					<Meta />
					{this.props.children}
				</>
			</ThemeProvider>
		);
	}
}

export default Page;
