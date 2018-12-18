import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import { CURRENT_USER_QUERY } from "./User";

const REMOVE_FROM_CART_MUTATION = gql`
	mutation removeFromCart($id: ID!) {
		removeFromCart(id: $id) {
			id
		}
	}
`;

const BigButton = styled.button`
	font-size: 3rem;
	background: none;
	border: 0;
	&:hover {
		color: ${props => props.theme.red};
		cursor: pointer;
	}
`;

class RemoveFromCart extends Component {
	static propTypes = {
		id: PropTypes.string.isRequired,
	};
	// this gets called as soon as we gat a response back that a mutation has been performed
	update = (cache, payload) => {
		console.log("running remove from cart update function");
		// first read the cache
		const data = cache.readQuery({ query: CURRENT_USER_QUERY });
		console.log(data);
		// remove the item from the cart
		const cartItemId = payload.data.removeFromCart.id;
		data.me.cart = data.me.cart.filter(cartItem => cartItem.id !== cartItemId);
		// write it back to the cache
		cache.writeQuery({ query: CURRENT_USER_QUERY, data });
	};
	render() {
		return (
			<Mutation
				update={this.update}
				mutation={REMOVE_FROM_CART_MUTATION}
				variables={{ id: this.props.id }}
				optimisticResponse={{
					__typename: "Mutation",
					removeFromCart: {
						__typename: "CartItem",
						id: this.props.id,
					},
				}}
			>
				{(removeFromCart, { loading, error }) => (
					<BigButton
						onClick={() => {
							removeFromCart().catch(err => alert(err.message));
						}}
						title="Delete Item"
					>
						&times;
					</BigButton>
				)}
			</Mutation>
		);
	}
}

export default RemoveFromCart;
