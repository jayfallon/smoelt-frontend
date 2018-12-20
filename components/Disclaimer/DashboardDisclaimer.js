import styled from "styled-components";

const DashboardDisclaimer = styled.section`
	background-color: #f8f8f8;
	padding: 6rem 0 15.5rem;
	p {
		margin: ${props => props.theme.margin};
		padding: ${props => props.theme.padding};
		max-width: 84.8rem;
		color: #242424;
		font-size: 1.2rem;
		line-height: 1.67;
		text-align: center;
	}
`;

export default DashboardDisclaimer;
