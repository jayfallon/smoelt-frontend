import styled, { keyframes } from "styled-components";

const DropDown = styled.div`
	width: 100%;
	position: absolute;
	z-index: 2;
`;

const DropDownItem = styled.div`
	background: ${props => (props.highlighted ? "#f7f7f7" : "white")};
	padding: 1.25rem;
	max-width: 126rem;
	display: flex;
	align-items: center;
	transition: all 0.2s;
	${props => (props.highlighted ? "padding-left: 2rem;" : null)};
	img {
		margin-right: 10px;
	}
`;

const glow = keyframes`
  from {
    box-shadow: 0 0 0px yellow;
  }

  to {
    box-shadow: 0 0 10px 1px yellow;
  }
`;

const SearchStyles = styled.div`
	background-color: ${props => props.theme.smoeltBlack};
	margin: ${props => props.theme.margin};
	padding: 2rem;
	max-width: ${props => props.theme.maxWidth};
	position: relative;
	input {
		width: 100%;
		padding: 10px;
		border: 0;
		font-size: 2rem;
		&.loading {
			animation: ${glow} 0.5s ease-in-out infinite alternate;
		}
	}
`;

export { DropDown, DropDownItem, SearchStyles };
