import Link from "next/link";
import Router from "next/router";
import NProgress from "nprogress";
import Cart from "../Cart/Cart";
import Nav from "../Nav/Nav";
import Search from "../Search/Search";
import styled from "styled-components";

Router.onRouteChangeStart = () => {
	NProgress.start();
};
Router.onRouteChangeComplete = () => {
	NProgress.done();
};
Router.onRouteChangeError = () => {
	NProgress.done();
};

const Logo = styled.h1`
	font-size: 3rem;
	margin-left: 2rem;
	padding-bottom: 2rem;
	position: relative;
	z-index: 2;
	/* transform: skew(-7deg); */
	a {
		padding: 0.5rem 1rem;
		/* background: ${props => props.theme.red}; */
		/* color: white; */
		color: #131313;
		text-transform: uppercase;
		text-decoration: none;
		cursor: pointer;
	}
	@media (max-width: 1280px) {
		margin: 0;
		text-align: center;
	}
`;

const StyledHeader = styled.header`
	.bar {
		border-bottom: 10px solid ${props => props.theme.black};
		display: grid;
		grid-template-columns: auto 1fr;
		justify-content: space-between;
		align-items: stretch;
		@media (max-width: 1300px) {
			grid-template-columns: 1fr;
			justify-content: center;
		}
	}
	.sub-bar {
		display: grid;
		grid-template-columns: 1fr auto;
		border-bottom: 1px solid ${props => props.theme.lightgrey};
	}
`;

const Header = () => (
	<StyledHeader>
		<Nav />
		<Search />
		<Cart />
	</StyledHeader>
);

export default Header;
