import styled from "styled-components";

const PaginationStyles = styled.div`
	margin: ${props => props.theme.margin};
	padding: ${props => props.theme.padding};
	max-width: ${props => props.theme.maxWidth};
	display: flex;
	justify-content: center;
	.pagination_component {
		margin: 2rem 0;
		border: 0.2rem solid ${props => props.theme.smoeltBlack};
		border-radius: 10px;
		font-family: GothamBold, sans-serif;
		font-size: 1.6rem;
		text-align: center;
		display: grid;
		grid-template-columns: repeat(4, auto);
		justify-content: center;
		align-items: stretch;
		align-content: center;
		& > * {
			margin: 0;
			padding: 1.5rem;
			border-right: 0.2rem solid ${props => props.theme.smoeltBlack};
			&:last-child {
				border-right: 0;
			}
		}
		a {
			color: ${props => props.theme.smoeltBlack};
		}
		a[aria-disabled="true"] {
			color: grey;
			pointer-events: none;
		}
	}
`;

export default PaginationStyles;
