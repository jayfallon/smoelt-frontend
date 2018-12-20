import styled from "styled-components";

const PaginationStyles = styled.div`
	margin: 2rem 0;
	border: 1px solid ${props => props.theme.lightgrey};
	border-radius: 10px;
	text-align: center;
	display: inline-grid;
	grid-template-columns: repeat(4, auto);
	justify-content: center;
	align-items: stretch;
	align-content: center;
	& > * {
		margin: 0;
		padding: 15px 30px;
		border-right: 1px solid ${props => props.theme.lightgrey};
		&:last-child {
			border-right: 0;
		}
	}
	a[aria-disabled="true"] {
		color: grey;
		pointer-events: none;
	}
`;

export default PaginationStyles;
