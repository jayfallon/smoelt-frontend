import styled from "styled-components";

const FaqStyles = styled.section`
	background-color: ${props => props.theme.offWhite};
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
		background-color: ${props => props.theme.smoeltWhite};
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

	.faq_question {
		margin-bottom: 3.2rem;
	}

	.faq_question label {
		background-image: url(/static/images/cross-black.png);
		background-repeat: no-repeat;
		background-size: 1.5rem 1.5rem;
		background-position: right 2rem center;
		background-color: ${props => props.theme.smoeltWhite};
		padding: 1.5rem 7rem 1.5rem 2.5rem;
		color: #181818;
		font-family: GothamBold;
		font-size: 1.6rem;
		line-height: 1.43;
		letter-spacing: -0.03rem;
		cursor: pointer;
		display: block;
		position: relative;
		z-index: 20;
		border-radius: 0.4rem;
	}

	.faq_question label:hover {
		background-color: ${props => props.theme.smoeltWhite};
		box-shadow: 0 0.4rem 0.6rem 0.4rem rgba(0, 0, 0, 0.15);
	}

	.faq_question input:checked + label:hover {
		box-shadow: 0 0 0 0;
	}

	.faq_question input:checked + label,
	.faq_question input:checked + label:hover {
		background-image: url(/static/images/ex-black.png);
		background-repeat: no-repeat;
		background-size: 1.5rem 1.5rem;
		background-position: right 2rem center;
	}

	.faq_question input {
		display: none;
	}

	.faq_question article {
<<<<<<< HEAD
		background: ${props => props.theme.smoeltWhite}fff;
=======
		background: ${props => props.theme.smoeltWhite};
>>>>>>> master
		margin: -1px 0 0;
		overflow: hidden;
		height: 0px;
		position: relative;
		z-index: 10;
		transition: height 0.3s ease-in-out, box-shadow 0.6s linear;
	}

	.faq_question input:checked ~ article {
		transition: height 0.5s ease-in-out, box-shadow 0.1s linear;
	}

	.faq_question article p {
		line-height: 23px;
		font-size: 14px;
		padding: 0 2rem 1rem 2.6rem;
	}

	.faq_question input:checked ~ article.display {
		height: 18rem;
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
	background-color: ${props => props.theme.smoeltWhite};
	padding: 9.2rem 0 16.9rem;
	color: ${props => props.theme.darkGray};
	.support-inner {
		margin: ${props => props.theme.margin};
		padding: ${props => props.theme.padding};
		max-width: ${props => props.theme.maxWidth};
	}
	h4 {
		padding-bottom: 1.4rem;
		font-family: ${props => props.theme.fontBold};
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
		color: ${props => props.theme.darkGray};
	}
`;

export default FaqStyles;
export { FaqSupport };
