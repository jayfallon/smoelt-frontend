import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import Form from "../styles/Form";
import Error from "../ErrorMessage/ErrorMessage";
import { InnerLoginPage, LoginForm } from "../styles/InnerLogin";
import LoginHeader from "../Loginheader/LoginHeader";
import GlobalLoginStyle from "../styles/Global/GlobalLoginStyle";
import { SubmitButton } from "../styles/SubmitButton";
import { CURRENT_USER_QUERY } from "../User/User";

const SIGNUP_MUTATION = gql`
	mutation SIGNUP_MUTATION($email: String!, $name: String!, $password: String!) {
		signup(email: $email, name: $name, password: $password) {
			id
			email
			name
		}
	}
`;

export default class Signup extends Component {
	state = {
		name: "",
		password: "",
		email: "",
	};
	saveToState = e => {
		this.setState({ [e.target.name]: e.target.value });
	};
	render() {
		return (
			<InnerLoginPage>
				<GlobalLoginStyle />
				<LoginHeader />

				<Mutation
					mutation={SIGNUP_MUTATION}
					variables={this.state}
					refetchQueries={[{ query: CURRENT_USER_QUERY }]}
				>
					{(signup, { error, loading }) => {
						return (
							<LoginForm
								method="post"
								onSubmit={async e => {
									e.preventDefault();
									const res = await signup();
									console.log(res);
									this.setState({ name: "", email: "", password: "" });
								}}
							>
								<fieldset disabled={loading} aria-busy={loading}>
									<legend>Sign Up</legend>
									<Error error={error} />
									<div className="smoelt_form--group">
										<label htmlFor="email">Email</label>
										<input
											type="email"
											name="email"
											placeholder="email"
											value={this.state.email}
											onChange={this.saveToState}
										/>
									</div>
									<div className="smoelt_form--group">
										<label htmlFor="name">Name</label>
										<input
											type="text"
											name="name"
											placeholder="name"
											value={this.state.name}
											onChange={this.saveToState}
										/>
									</div>
									<div className="smoelt_form--group">
										<label htmlFor="password">Password</label>
										<input
											type="password"
											name="password"
											placeholder="password"
											value={this.state.password}
											onChange={this.saveToState}
										/>
									</div>
									<div className="smoelt_form--group form-submit">
										<SubmitButton type="submit">Sign Up</SubmitButton>
									</div>
								</fieldset>
							</LoginForm>
						);
					}}
				</Mutation>
			</InnerLoginPage>
		);
	}
}

export { SIGNUP_MUTATION };
