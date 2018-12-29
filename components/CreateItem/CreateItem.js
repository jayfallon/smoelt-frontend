import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import { createGlobalStyle } from "styled-components";
import Router from "next/router";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { LoginForm } from "../styles/InnerLogin";
import { PreviewButton } from "../styles/SubmitButton";
import Error from "../ErrorMessage/ErrorMessage";
import CreateItemStyles, { CreateItemWrapper } from "./CreateItemStyles";
import GlobalPageStyles from "../styles/Global/GlobalPageStyle";

const CREATE_ITEM_MUTATION = gql`
	mutation CREATE_ITEM_MUTATION(
		$title: String!
		$description: String!
		$price: Int!
		$image: String
		$largeImage: String
	) {
		createItem(title: $title, description: $description, price: $price, image: $image, largeImage: $largeImage) {
			id
		}
	}
`;

export default class CreateItem extends Component {
	state = {
		title: "",
		description: "",
		image: "",
		largeImage: "",
		price: 0,
	};
	handleChange = e => {
		const { name, type, value } = e.target;
		const val = type === "number" ? parseFloat(value) : value;
		this.setState({ [name]: val });
	};

	uploadFile = async e => {
		const files = e.target.files;
		const data = new FormData();
		data.append("file", files[0]);
		data.append("upload_preset", "smoelt");
		const res = await fetch("https://api.cloudinary.com/v1_1/smoelt/image/upload", {
			method: "POST",
			body: data,
		});
		const file = await res.json();
		this.setState({
			image: file.secure_url,
			largeImage: file.eager[0].secure_url,
		});
	};
	render() {
		return (
			<>
				<GlobalPageStyles />
				<Header />
				<CreateItemWrapper>
					<main>
						<CreateItemStyles>
							<div className="createInner">
								<h3>Create a Landing Page</h3>
								<Mutation mutation={CREATE_ITEM_MUTATION} variables={this.state}>
									{(createItem, { loading, error }) => (
										<LoginForm
											data-test="form"
											onSubmit={async e => {
												// stop form
												e.preventDefault();
												// call mutation
												const res = await createItem();
												// change them to single item
												console.log(res);
												Router.push({
													pathname: "/item",
													query: { id: res.data.createItem.id },
												});
											}}
										>
											<Error error={error} />
											<fieldset disabled={loading} aria-busy={loading}>
												<div className="smoelt_form--group" />
												<div className="smoelt_form--group">
													<label htmlFor="file">Image</label>
													<input
														type="file"
														id="file"
														name="file"
														placeholder="Upload and image"
														required
														onChange={this.uploadFile}
													/>
													{this.state.image && (
														<img src={this.state.image} alt="Upload Preview" />
													)}
												</div>
												<div className="smoelt_form--group">
													<label htmlFor="title">Title</label>
													<input
														type="text"
														id="title"
														name="title"
														placeholder="Title"
														required
														value={this.state.title}
														onChange={this.handleChange}
													/>
												</div>
												<div className="smoelt_form--group">
													<label htmlFor="price">Promo Code</label>
													<input
														type="text"
														id="price"
														name="price"
														placeholder="Price"
														required
														value={this.state.price}
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
														value={this.state.description}
														onChange={this.handleChange}
													/>
												</div>

												<div className="smoelt_form--group form-submit">
													<PreviewButton type="submit">Create!</PreviewButton>
												</div>
											</fieldset>
										</LoginForm>
									)}
								</Mutation>
							</div>
						</CreateItemStyles>
					</main>
				</CreateItemWrapper>
				<Footer />
			</>
		);
	}
}

export { CREATE_ITEM_MUTATION };
