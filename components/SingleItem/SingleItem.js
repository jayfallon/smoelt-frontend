import React, { Component } from "react";
import Head from "next/head";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import styled, { createGlobalStyle } from "styled-components";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Error from "../ErrorMessage/ErrorMessage";
import GlobalPageStyles from "../styles/Global/GlobalPageStyle";

const SingleItemStyles = styled.div`
	background-color: ${props => props.theme.offWhite};
	max-width: 1200px;
	margin: 2rem auto;
	display: grid;
	grid-template-columns: 10rem auto 10rem;
	grid-template-rows: 10rem auto 10rem;
	min-height: 800px;
	@media (max-width: 50rem) {
		grid-template-columns: 1rem auto 1rem;
		grid-template-rows: 1rem auto 1rem;
	}
	img {
		width: 100%;
		height: auto;
		grid-area: 1/1/4/4;
	}
	.details {
		background-color: hsla(0, 0%, 0%, 0.5);
		padding: 5rem;
		color: ${props => props.theme.smoeltWhite};
		grid-area: 2/2/3/3;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		h2 {
			margin-bottom: 3rem;
			font-family: ${props => props.theme.fontBold};
			font-size: 5.6rem;
			/* text-align: center; */
		}
		p {
			font-size: 2.4rem;
			text-align: center;
		}
	}
`;

const SINGLE_ITEM_QUERY = gql`
	query SINGLE_ITEM_QUERY($id: ID!) {
		item(where: { id: $id }) {
			id
			title
			description
			largeImage
		}
	}
`;

export default class SingleItem extends Component {
	render() {
		return (
			<Query
				query={SINGLE_ITEM_QUERY}
				variables={{
					id: this.props.id,
				}}
			>
				{({ error, loading, data }) => {
					if (error) return <Error error={error} />;

					if (loading) return <p>Loading...</p>;
					if (!data.item) return <p data-test="graphql-error">No item found for {this.props.id}</p>;
					const item = data.item;
					return (
						<>
							<GlobalPageStyles />
							<Header />
							<Head>
								<title>Smoelt | {item.title}</title>
							</Head>
							<SingleItemStyles>
								<img src={item.largeImage} alt={item.title} />
								<div className="details">
									<h2>{item.title}</h2>
									<p>{item.description}</p>
								</div>
							</SingleItemStyles>
							<Footer />
						</>
					);
				}}
			</Query>
		);
	}
}

export { SINGLE_ITEM_QUERY };
