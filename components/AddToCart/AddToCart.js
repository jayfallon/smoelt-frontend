import React from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import { CURRENT_USER_QUERY } from "../User/User";

const ADD_TO_CART_MUTATION = gql`
	mutation addToCart($id: ID!) {
		addToCart(id: $id) {
			id
			quantity
		}
	}
`;

class AddToCart extends React.Component {
	render() {
		const { id } = this.props;
		return (
			<Mutation
				variables={{ id }}
				refetchQueries={[{ query: CURRENT_USER_QUERY }]}
				mutation={ADD_TO_CART_MUTATION}
			>
				{(addToCart, { loading }) => (
					<button disabled={loading} onClick={addToCart}>
						Add{loading && "ing"} To Cart
					</button>
				)}
			</Mutation>
		);
	}
}

export default AddToCart;
