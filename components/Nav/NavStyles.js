import styled from "styled-components";

const NavStyles = styled.div`
	background-color: #242424;
	a {
		color: #f8f8f8;
		text-decoration: none;
	}

	a:hover {
		text-decoration: underline;
	}

	.smoelt_dashboard--nav-wrapper {
		padding: ${props => props.theme.padding};
	}

	nav.smoelt_dashboard--nav {
		margin: ${props => props.theme.margin};
		padding: ${props => props.theme.padding};
		max-width: ${props => props.theme.maxWidth};
		height: 8rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		@media (max-width: 50rem) {
			height: 13rem;
			flex-direction: column;
		}
	}

	nav.smoelt_dashboard--nav ul {
		display: flex;
		align-items: center;
	}

	ul.smoelt_dashboard--logo li:first-child {
		padding-right: 2.65rem;
		height: 8rem;
		width: 8rem;
	}

	ul.smoelt_dashboard--logo h3 {
		padding-left: 2.65rem;
		border-left: 0.2rem solid #f8f8f8;
		color: #f8f8f8;
		font-family: GothamBold, sans-serif;
		font-size: 1.8rem;
		letter-spacing: 0.23rem;
		text-transform: uppercase;
	}

	ul.smoelt_dashboard--menu li {
		margin: 0 0 0 3rem;
		@media (max-width: 50rem) {
			margin: 0 1rem 2rem;
		}
	}

	ul.smoelt_dashboard--menu a {
		font-family: GothamBold, sans-serif;
		font-size: 1.2rem;
		text-transform: uppercase;
	}
`;

const Logo = styled.h1`
	display: flex;
	justify-content: center;
	align-items: center;

	a {
		background-image: url(/static/images/smoelt-logo-dash.png);
		background-repeat: no-repeat;
		background-position: center center;
		background-size: 8rem 8rem;
		width: 8rem;
		height: 8rem;
	}

	span {
		display: none;
	}
`;

const CreateButton = styled.button`
	background-color: #f8f8f8;
	padding: 1.15rem 2.65rem;
	min-width: 12rem;
	border: 0;
	border-radius: 2.5rem;
	color: #242424;
	font-family: GothamBold, sans-serif;
	font-size: 1.2rem;
	letter-spacing: 0.15rem;
	text-transform: uppercase;
	cursor: pointer;
	&:hover {
		background-color: ${props => props.theme.livingCoral};
		color: #f8f8f8;
	}
	&:active {
		background-color: #c65a52;
		color: #f8f8f8;
	}
`;

export default NavStyles;
export { Logo, CreateButton };