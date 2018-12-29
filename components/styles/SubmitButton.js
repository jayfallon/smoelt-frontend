import styled from "styled-components";

const SubmitButton = styled.button`
	background-color: ${props => props.theme.offWhite};
	padding: 1.75rem 2.65rem;
	min-width: 19rem;
	border: 0;
	border-radius: 2.5rem;
	color: ${props => props.theme.darkGray};
	font-family: ${props => props.theme.fontBold};
	font-size: 1.2rem;
	letter-spacing: 0.15rem;
	text-transform: uppercase;
	cursor: pointer;
	&:hover {
		background-color: ${props => props.theme.darkGray};
		color: ${props => props.theme.offWhite};
	}
	&:active {
		background-color: ${props => props.theme.boseBlack};
		color: ${props => props.theme.offWhite};
	}
`;
const GiveAwayButton = styled.button`
	background-color: #666;
	padding: 1.15rem 2.65rem;
	min-width: 19rem;
	border: 0;
	border-radius: 2.5rem;
	color: ${props => props.theme.offWhite};
	font-family: ${props => props.theme.fontBold};
	font-size: 1.2rem;
	letter-spacing: 0.15rem;
	text-transform: uppercase;
	cursor: pointer;
	&:hover {
		background-color: ${props => props.theme.darkGray};
		color: ${props => props.theme.offWhite};
	}
	&:active {
		background-color: ${props => props.theme.boseBlack};
		color: ${props => props.theme.offWhite};
	}
`;

const PreviewButton = styled.button`
	background-color: ${props => props.theme.livingCoral};
	padding: 1.15rem 2.65rem;
	min-width: 12rem;
	border: 0;
	border-radius: 2.5rem;
	color: ${props => props.theme.offWhite};
	font-family: ${props => props.theme.fontBold};
	font-size: 1.2rem;
	letter-spacing: 0.15rem;
	text-transform: uppercase;
	cursor: pointer;
	&:hover {
		background-color: #282828;
		color: ${props => props.theme.offWhite};
	}
	&:active {
		background-color: #101010;
		color: ${props => props.theme.offWhite};
	}
`;

export { SubmitButton, GiveAwayButton, PreviewButton };
