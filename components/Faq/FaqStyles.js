import styled from "styled-components";

const FaqStyles = styled.section`
	background-color: #f8f8f8;
	padding: 8rem 0 8rem;

	.faq_questions--inner {
		margin: 0 auto 8rem;
		padding: ${props => props.theme.padding};
		max-width: ${props => props.theme.maxWidth};
	}

	h3 {
		margin-bottom: 6rem;
		color: #000000;
		font-family: GothamBold;
		font-size: 2.8rem;
		line-height: 1.71;
		letter-spacing: 0.25rem;
		text-align: center;
		text-transform: uppercase;
	}

	h4 {
		background-image: url(/static/images/cross-black.png);
		background-repeat: no-repeat;
		background-position: center right 2rem;
		background-size: 1.8rem;
		margin-bottom: 3.2rem;
		background-color: #ffffff;
		padding: 1.5rem 7rem 1.5rem 2.5rem;
		color: #181818;
		font-family: GothamBold;
		font-size: 1.6rem;
		letter-spacing: -0.3px;
		border-radius: 0.4rem;
		cursor: pointer;
		:hover {
			box-shadow: 0 4px 6px 4px rgba(0, 0, 0, 0.15);
		}
	}

	.faq_questions--wrapper {
		display: flex;
		justify-content: space-between;
		@media (max-width: 700px) {
			justify-content: flex-start;
			flex-direction: column;
		}
	}

	.faq_questions--grid {
		margin: 0 3.2rem 0 0;
		flex: 1 1 auto;
		max-width: 60.8rem;
		:nth-child(2) {
			margin: 0 0 0 3.2rem;
			@media (max-width: 700px) {
				margin: 0 0 0 0;
			}
		}
		@media (max-width: 700px) {
			margin: 0 0 0 0;
		}
	}
`;

const FaqSupport = styled.section`
	background-color: #ffffff;
	padding: 9.2rem 0 16.9rem;
	color: #242424;
	.support-inner {
		margin: ${props => props.theme.margin};
		padding: ${props => props.theme.padding};
		max-width: ${props => props.theme.maxWidth};
	}
	h4 {
		padding-bottom: 1.4rem;
		font-family: GothamBold, sans-serif;
		font-size: 2.8rem;
		line-height: 1.71;
		letter-spacing: 2.5px;
		text-align: center;
		text-transform: uppercase;
	}
	p {
		margin: ${props => props.theme.margin};
		padding: ${props => props.theme.padding};
		max-width: 84.8rem;
		font-size: 1.6rem;
		line-height: 1.67;
		text-align: center;
	}
	a {
		color: #242424;
	}
`;

export default FaqStyles;
export { FaqSupport };
