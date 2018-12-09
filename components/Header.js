import Link from "next/link";
import Router from "next/router";
import NProgress from "nprogress";
import Nav from "./Nav";
import styled, { injectGlobal } from "styled-components";

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
	transform: skew(-7deg);
	a {
		padding: 0.5rem 1rem;
		background: ${props => props.theme.red};
		color: white;
		text-transform: uppercase;
		text-decoration: none;
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
		<div className="bar">
			<Link href="/">
				<Logo>
					<a>Smoelt &amp; Co.</a>
				</Logo>
			</Link>
			<Nav />
		</div>
		<div className="sub-bar">Search</div>
		<div>Cart</div>
	</StyledHeader>
);

export default Header;
