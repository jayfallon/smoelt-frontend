import styled from "styled-components";

const Item = styled.div`
	background-color: ${props => props.theme.smoeltWhite};
	height: 41.6rem;
	color: ${props => props.theme.darkGray};
<<<<<<< HEAD
	box-shadow: ${props => props.theme.boxShadow};
=======
	box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.25);
>>>>>>> master
	box-shadow: ${props => props.theme.bs};
	position: relative;
	display: grid;
	grid-template-columns: 5rem 1fr 5rem;
	grid-template-rows: 2rem 29.6rem 2rem 8rem;

	img {
		max-width: 100%;
		max-height: auto;
		grid-area: 1/1/4/4;
	}
	.buttonList {
		grid-area: 4/1/5/4;
		display: grid;
		/* width: 100%; */
		border-top: 1px solid #e6e6e6;
		grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
		grid-gap: 1px;
		background: #e6e6e6;
		& > * {
			background: white;
			border: 0;
			font-size: 2rem;
			padding: 1rem;
		}
		a {
			color: ${props => props.theme.smoeltBlack};
			text-decoration: none;
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}
`;

export default Item;
