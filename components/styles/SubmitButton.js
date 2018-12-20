import styled from "styled-components";

const SubmitButton = styled.button`
	background-color: #f8f8f8;
	padding: 1.75rem 2.65rem;
	min-width: 19rem;
	border: 0;
	border-radius: 2.5rem;
	color: #242424;
	font-family: GothamBold, sans-serif;
	font-size: 1.2rem;
	letter-spacing: 0.15rem;
	text-transform: uppercase;
	cursor: pointer;
	&:hover {
		background-color: #242424;
		color: #f8f8f8;
	}
	&:active {
		background-color: ${props => props.theme.boseBlack};
		color: #f8f8f8;
	}
`;
const GiveAwayButton = styled.button`
	background-color: #666;
	padding: 1.15rem 2.65rem;
	min-width: 19rem;
	border: 0;
	border-radius: 2.5rem;
	color: #f8f8f8;
	font-family: GothamBold, sans-serif;
	font-size: 1.2rem;
	letter-spacing: 0.15rem;
	text-transform: uppercase;
	cursor: pointer;
	&:hover {
		background-color: #242424;
		color: #f8f8f8;
	}
	&:active {
		background-color: ${props => props.theme.boseBlack};
		color: #f8f8f8;
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

const PreviewButton = styled.button`
	background-color: ${props => props.theme.livingCoral};
	padding: 1.15rem 2.65rem;
	min-width: 12rem;
	border: 0;
	border-radius: 2.5rem;
	color: #f8f8f8;
	font-family: GothamBold, sans-serif;
	font-size: 1.2rem;
	letter-spacing: 0.15rem;
	text-transform: uppercase;
	cursor: pointer;
	&:hover {
		background-color: #282828;
		color: #f8f8f8;
	}
	&:active {
		background-color: #101010;
		color: #f8f8f8;
	}
`;

export { SubmitButton, GiveAwayButton, CreateButton, PreviewButton };
