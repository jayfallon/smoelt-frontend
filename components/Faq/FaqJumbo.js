import styled from "styled-components";

const FaqJumboStyles = styled.div`
	background-image: url(/static/images/rawpixel-666934-unsplash.png);
	background-repeat: no-repeat;
	background-position: center left;
	background-color: #242424;
	padding: 14.3rem 0;
	.jumboInner {
		margin: 0 auto 0;
		padding: ${props => props.theme.padding};
		max-width: ${props => props.theme.maxWidth};
		h2 {
			font-family: GothamBold;
			font-size: 8rem;
			text-align: center;
			color: #242424;
		}
		p {
			color: #242424;
			font-size: 1.8rem;
			line-height: 2;
			text-align: center;
			text-transform: uppercase;
		}
	}
`;

const FaqJumbo = props => (
	<FaqJumboStyles>
		<div className="jumboInner">
			<h2>FAQ</h2>
			<p>Learn how Landing Pages work.</p>
		</div>
	</FaqJumboStyles>
);

export default FaqJumbo;
