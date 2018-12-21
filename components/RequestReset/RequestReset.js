import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import { InnerLoginPage, LoginForm } from "../styles/InnerLogin";
import LoginHeader from "../Loginheader/LoginHeader";
import GlobalLoginStyle from "../styles/Global/GlobalLoginStyle";
import { SubmitButton } from "../styles/SubmitButton";
import Form from "../styles/Form";
import Error from "../ErrorMessage/ErrorMessage";

const REQUEST_RESET_MUTATION = gql`
	mutation REQUEST_RESET_MUTATION($email: String!) {
		requestReset(email: $email) {
			message
		}
	}
`;

class RequestReset extends Component {
	state = {
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
				<Mutation mutation={REQUEST_RESET_MUTATION} variables={this.state}>
					{(reset, { error, loading, called }) => (
						<LoginForm
							method="post"
							data-test="form"
							onSubmit={async e => {
								e.preventDefault();
								await reset();
								this.setState({ email: "" });
							}}
						>
							<fieldset disabled={loading} aria-busy={loading}>
								<h2>Request Password Reset</h2>
								<Error error={error} />
								{!error && !loading && called && <h4>Check your email for a reset link</h4>}
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

								<div className="smoelt_form--group form-submit">
									<SubmitButton type="submit">Request Reset</SubmitButton>
								</div>
							</fieldset>
						</LoginForm>
					)}
				</Mutation>
			</InnerLoginPage>
		);
	}
}

export default RequestReset;
export { REQUEST_RESET_MUTATION };
