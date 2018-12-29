import styled from "styled-components";

const DashboardDisclaimer = styled.section`
	background-color: ${props => props.theme.offWhite};
	padding: 6rem 0 15.5rem;
	p {
		margin: ${props => props.theme.margin};
		padding: ${props => props.theme.padding};
		max-width: 84.8rem;
		color: ${props => props.theme.darkGray};
		font-size: 1.2rem;
		line-height: 1.67;
		text-align: center;
	}
`;

export default DashboardDisclaimer;
