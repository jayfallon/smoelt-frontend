import React, { Component } from "react";
import { Mutation, Query } from "react-apollo";
import gql from "graphql-tag";
import { LoginForm } from "../styles/InnerLogin";
import Error from "../ErrorMessage/ErrorMessage";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { PreviewButton } from "../styles/SubmitButton";
import CreateItemStyles, { CreateItemWrapper } from "../CreateItem/CreateItemStyles";

const SINGLE_ITEM_QUERY = gql`
	query SINGLE_ITEM_QUERY($id: ID!) {
		item(where: { id: $id }) {
			id
			title
			description
			price
		}
	}
`;

const UPDATE_ITEM_MUTATION = gql`
	mutation UPDATE_ITEM_MUTATION($id: ID!, $title: String, $description: String, $price: Int) {
		updateItem(id: $id, title: $title, description: $description, price: $price) {
			id
			title
			description
			price
		}
	}
`;

export default class UpdateItem extends Component {
	state = {};
	handleChange = e => {
		const { name, type, value } = e.target;
		const val = type === "number" ? parseFloat(value) : value;
		this.setState({ [name]: val });
	};

	updateItem = async (e, updateItemMutation) => {
		e.preventDefault();
		console.log("updating item");
		console.log(this.state);
		const res = await updateItemMutation({
			variables: {
				id: this.props.id,
				...this.state,
			},
		});
		console.log("Updated!!");
	};

	render() {
		return (
			<>
				<Header />
				<CreateItemWrapper>
					<main>
						<CreateItemStyles>
							<Query
								query={SINGLE_ITEM_QUERY}
								variables={{
									id: this.props.id,
								}}
							>
								{({ data, loading }) => {
									if (loading) return <p>Loading...</p>;
									if (!data.item) return <p>No Item Found for ID {this.props.id}</p>;
									return (
										<Mutation mutation={UPDATE_ITEM_MUTATION} variables={this.state}>
											{(updateItem, { loading, error }) => (
												<LoginForm onSubmit={e => this.updateItem(e, updateItem)}>
													<Error error={error} />
													<fieldset disabled={loading} aria-busy={loading}>
														<div className="smoelt_form--group">
															<label htmlFor="title">Title</label>
															<input
																type="text"
																id="title"
																name="title"
																placeholder="Title"
																required
																defaultValue={data.item.title}
																onChange={this.handleChange}
															/>
														</div>
														<div className="smoelt_form--group">
															<label htmlFor="price">Price</label>
															<input
																type="number"
																id="price"
																name="price"
																placeholder="Price"
																required
																defaultValue={data.item.price}
																onChange={this.handleChange}
															/>
														</div>
														<div className="smoelt_form--group">
															<label htmlFor="description">Description</label>
															<textarea
																id="description"
																name="description"
																placeholder="Enter a description"
																required
																defaultValue={data.item.description}
																onChange={this.handleChange}
															/>
														</div>
														<div className="smoelt_form--group form-submit">
															<PreviewButton type="submit">
																Sav{loading ? "ing" : "e"} Changes
															</PreviewButton>
														</div>
													</fieldset>
												</LoginForm>
											)}
										</Mutation>
									);
								}}
							</Query>
						</CreateItemStyles>
					</main>
				</CreateItemWrapper>
				<Footer />
			</>
		);
	}
}

export { UPDATE_ITEM_MUTATION };
