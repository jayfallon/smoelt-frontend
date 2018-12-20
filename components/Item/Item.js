import React, { Component } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import Title from "../styles/Title";
import ItemStyles from "../styles/ItemStyles";
import DeleteItem from "../DeleteItem/DeleteItem";
import AddToCart from "../AddToCart/AddToCart";

export default class Item extends Component {
	static propTypes = {
		item: PropTypes.object.isRequired,
	};

	render() {
		const { item } = this.props;
		return (
			<ItemStyles>
				{item.image && <img src={item.image} alt={item.title} />}
				<Title>
					<Link
						href={{
							pathname: "/item",
							query: { id: item.id },
						}}
					>
						<a>{item.title}</a>
					</Link>
				</Title>
				<p>{item.description}</p>
				<div className="buttonList">
					<Link
						href={{
							pathname: "/update",
							query: { id: item.id },
						}}
					>
						<a>Edit</a>
					</Link>

					<DeleteItem id={item.id}>Delete This Item</DeleteItem>
				</div>
			</ItemStyles>
		);
	}
}
