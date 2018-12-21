import React, { Component } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import Title from "./Title";
import ItemStyles from "./ItemStyles";
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
				<Link
					href={{
						pathname: "/item",
						query: { id: item.id },
					}}
				>
					{item.image && <img src={item.image} alt={item.title} />}
				</Link>
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
				{/* <p>{item.description}</p> */}
				<div className="buttonList">
					<Link
						href={{
							pathname: "/update",
							query: { id: item.id },
						}}
					>
						<a>
							<span>Edit</span>
						</a>
					</Link>

					<DeleteItem id={item.id}>Delete This Item</DeleteItem>
				</div>
			</ItemStyles>
		);
	}
}
