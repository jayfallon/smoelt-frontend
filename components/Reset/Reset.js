import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import Error from "../ErrorMessage/ErrorMessage";
import { InnerLoginPage, LoginForm } from "../styles/InnerLogin";
import LoginHeader from "../Loginheader/LoginHeader";
import GlobalLoginStyle from "../styles/Global/GlobalLoginStyle";
import { SubmitButton } from "../styles/SubmitButton";
import propTypes from "prop-types";
import CURRENT_USER_QUERY from "../User/User";

const RESET_MUTATION = gql`
	mutation RESET_MUTATION($resetToken: String!, $password: String!, $confirmPassword: String!) {
		resetPassword(resetToken: $resetToken, password: $password, confirmPassword: $confirmPassword) {
			id
			email
			name
		}
	}
`;

class Reset extends Component {
	static propTypes = {
		resetToken: propTypes.string.isRequired,
	};
	state = {
		password: "",
		confirmPassword: "",
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
					mutation={RESET_MUTATION}
					variables={{
						resetToken: this.props.resetToken,
						password: this.state.password,
						confirmPassword: this.state.confirmPassword,
					}}
					refetchQueries={[{ query: CURRENT_USER_QUERY }]}
				>
					{(reset, { error, loading, called }) => (
						<LoginForm
							method="post"
							onSubmit={async e => {
								e.preventDefault();
								await reset();
								this.setState({ password: "", confirmPassword: "" });
							}}
						>
							<fieldset disabled={loading} aria-busy={loading}>
								<legend>Reset Your Password </legend>
								<Error error={error} />
								<div className="smoelt_form--group">
									<label htmlFor="Password">Password</label>
									<input
										type="password"
										name="password"
										placeholder="Password"
										value={this.state.password}
										onChange={this.saveToState}
									/>
								</div>
								<div className="smoelt_form--group">
									<label htmlFor="confirmPassword">Confirm your Password</label>
									<input
										type="password"
										name="confirmPassword"
										placeholder="Confirm Password"
										value={this.state.confirmPassword}
										onChange={this.saveToState}
									/>
								</div>
								<div className="smoelt_form--group form-submit">
									<SubmitButton type="submit">Reset your Password</SubmitButton>
								</div>
							</fieldset>
						</LoginForm>
					)}
				</Mutation>
			</InnerLoginPage>
		);
	}
}

export default Reset;
