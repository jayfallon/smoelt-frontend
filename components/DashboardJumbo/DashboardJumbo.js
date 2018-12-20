import styled from "styled-components";

const DasboardJumboStyles = styled.article`
	background-image: url(/static/images/simon-launay-1063331-unsplash.png);
	background-repeat: no-repeat;
	background-position: top center;
	background-color: #242424;
	padding: 12rem 0 5.6rem;
	@media (max-width: 50rem) {
		padding: 3rem 0;
	}

	.jumboInner {
		margin: 0 auto 0;
		padding: ${props => props.theme.padding};
		max-width: ${props => props.theme.maxWidth};
	}

	h2 {
		color: #f8f8f8;
		font-family: GothamBold, sans-serif;
		font-size: 3.4rem;
		line-height: 1.06;
		text-align: center;
	}
`;

const DashboardJumbo = () => (
	<DasboardJumboStyles>
		<div className="jumboInner">
			<h2>Welcome to Smoelt &amp; Co.'s Landing Pages</h2>
		</div>
	</DasboardJumboStyles>
);

export default DashboardJumbo;
