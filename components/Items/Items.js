import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import styled, { createGlobalStyle } from "styled-components";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Item from "../Item/Item";
import Pagination from "../Pagination/Pagination";
import DashboardStyles from "../styles/DashboardStyles";
import DashboardDisclaimer from "../Disclaimer/DashboardDisclaimer";

import { ItemsStyles, ItemsInnerStyles } from "./ItemsStyles";
import { perPage } from "../../config";

const ALL_ITEMS_QUERY = gql`
	query ALL_ITEMS_QUERY($skip: Int = 0, $first: Int = ${perPage}) {
		items(first: $first, skip: $skip, orderBy: createdAt_DESC) {
			id
			title
			price
			description
			image
			largeImage
		}
	}
`;

const ItemsList = styled.div`
	margin: 0 auto;
	max-width: 128rem;
	display: grid;
	grid-gap: 1.6rem;
	grid-template-columns: repeat(auto-fill, minmax(36.4rem, 1fr));
`;

const GlobalItemsStyle = createGlobalStyle`
    body {
        background-color: ${props => props.theme.smoeltBlack};
    }
`;

export default class Items extends Component {
	render() {
		return (
			<div>
				<GlobalItemsStyle />
				<DashboardStyles />
				<Header />
				<main>
					<ItemsStyles>
						<ItemsInnerStyles>
							<Pagination page={this.props.page} />
							<Query
								query={ALL_ITEMS_QUERY}
								// fetchPolicy="network-only"

								variables={{
									skip: this.props.page * perPage - perPage,
								}}
							>
								{({ data, error, loading }) => {
									if (loading) return <p>Loading...</p>;
									if (error) return <p>Error: {error.message}</p>;
									return (
										<ItemsList>
											{data.items.map(item => (
												<Item item={item} key={item.id} />
											))}
										</ItemsList>
									);
								}}
							</Query>
							<Pagination page={this.props.page} />
						</ItemsInnerStyles>
					</ItemsStyles>

					<DashboardDisclaimer>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut purus mauris. Nullam
							suscipit libero sed nisi aliquam, sed ullamcorper orci vulputate. Nullam ut risus diam.
							Morbi tempor lectus sed laoreet imperdiet. Quisque blandit, tortor nec maximus convallis,
							lectus ipsum tempor lorem, ac porta turpis nunc dignissim dui. Nullam luctus orci lorem, id
							pharetra arcu rutrum vitae. Pellentesque vehicula diam et viverra blandit. Vestibulum vitae
							malesuada ipsum. Maecenas mi ipsum, tempor a aliquam quis, dictum et tortor. Nullam aliquet
							urna tincidunt libero congue, ac cursus tortor varius. Pellentesque varius elit eu nisl
							commodo tincidunt. Nunc non ligula quis ex suscipit fringilla. Ut nec nulla quam. Interdum
							et malesuada fames ac ante ipsum primis in faucibus. Duis porttitor enim ut tellus porta, a
							tempor dui rhoncus.
						</p>
					</DashboardDisclaimer>
				</main>
				<Footer />
			</div>
		);
	}
}

export { ALL_ITEMS_QUERY };
