import styled from "styled-components";

const ItemsStyles = styled.section`
	background-color: ${props => props.theme.offWhite};
	color: ${props => props.theme.darkGray};
`;

const ItemsInnerStyles = styled.div`
	margin: ${props => props.theme.margin};
	padding: 5.3rem 1rem 1rem;
	max-width: ${props => props.theme.maxWidth};

	.workflow_dashboard--awards-giveaway {
		background-color: ${props => props.theme.smoeltWhite};
		color: ${props => props.theme.darkGray};
		box-shadow: ${props => props.theme.boxShadow};
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 3.9rem 22.2rem 7.8rem 8.7rem;
		grid-template-areas: "entered" "image" "title" "footer";
	}

	.workflow_dashboard--awards-grid {
		margin: 0 auto;
		max-width: 128rem;
		display: grid;
		grid-gap: 1.6rem;
		grid-template-columns: repeat(auto-fill, minmax(36.4rem, 1fr));
	}

	.workflow_dashboard--grid-title h3 {
		font-family: ${props => props.theme.fontBold};
		font-size: 2.4rem;
		line-height: 1.08;
		letter-spacing: 0.5rem;
		text-transform: uppercase;
	}

	.workflow_dashboard--grid-title p {
		padding: 1.2rem 0 0.8rem;
		font-size: 1.6rem;
	}
`;

export { ItemsStyles, ItemsInnerStyles };
