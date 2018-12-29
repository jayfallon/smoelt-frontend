import styled from "styled-components";

const Title = styled.h3`
	background-color: hsla(0, 0%, 0%, 0.5);
	margin: 0 1rem;
	padding: 1rem;
	text-align: center;
	grid-area: 2/2/3/3;
	display: flex;
	justify-content: center;
	align-items: center;
	a {
		display: inline;
		color: ${props => props.theme.smoeltWhite};
		font-family: GothamBold;
		line-height: 1.3;
		font-size: 4rem;
		text-align: center;
		padding: 0 1rem;
	}
`;

export default Title;
