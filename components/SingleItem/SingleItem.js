import React, { Component } from "react";
import Head from "next/head";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import styled from "styled-components";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Error from "../ErrorMessage/ErrorMessage";

const SingleItemStyles = styled.div`
	background-color: #fff;
	max-width: 1200px;
	margin: 2rem auto;
	box-shadow: ${props => props.theme.bs};
	display: grid;
	grid-auto-columns: 1fr;
	grid-auto-flow: column;
	min-height: 800px;
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	.details {
		margin: 3rem;
		font-size: 2rem;
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
							<Header />
							<Head>
								<title>Smoelt | {item.title}</title>
							</Head>
							<SingleItemStyles>
								<img src={item.largeImage} alt={item.title} />
								<div className="details">
									<h2>Viewing {item.title}</h2>
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
