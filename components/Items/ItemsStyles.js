import styled from "styled-components";

const ItemsStyles = styled.section`
	background-color: #f8f8f8;
	color: #242424;
`;

const ItemsInnerStyles = styled.div`
	background-color: #fff;
	margin: ${props => props.theme.margin};
	padding: 5.3rem 1rem 1rem;
	max-width: ${props => props.theme.maxWidth};

	.workflow_dashboard--awards-giveaway {
		background-color: #fff;
		color: #242424;
		box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.25);
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
		font-family: GothamBold, sans-serif;
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
