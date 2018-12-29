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
		font-family: ${props => props.theme.fontBold};
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
			text-decoration: none;
		}
		a[aria-disabled="true"] {
			color: ${props => props.theme.gray};
			pointer-events: none;
		}
	}
`;

export default PaginationStyles;
