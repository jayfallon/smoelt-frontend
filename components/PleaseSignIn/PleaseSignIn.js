import React, { Component } from "react";
import Link from "next/link";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import Error from "../ErrorMessage/ErrorMessage";
import { InnerLoginPage, LoginForm } from "../styles/InnerLogin";
import LoginHeader from "../Loginheader/LoginHeader";
import GlobalLoginStyle from "../styles/Global/GlobalLoginStyle";
import { SubmitButton } from "../styles/SubmitButton";
import { CURRENT_USER_QUERY } from "../User/User";

const SIGNIN_MUTATION = gql`
	mutation SIGNIN_MUTATION($email: String!, $password: String!) {
		signin(email: $email, password: $password) {
			id
			email
			name
		}
	}
`;

class Signin extends Component {
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
				<LoginHeader heading={"Please Sign In"} />

				<Mutation
					mutation={SIGNIN_MUTATION}
					variables={this.state}
					refetchQueries={[{ query: CURRENT_USER_QUERY }]}
				>
					{(signup, { error, loading }) => (
						<main>
							<section>
								<LoginForm
									method="post"
									onSubmit={async e => {
										e.preventDefault();
										await signup();
										this.setState({ name: "", email: "", password: "" });
									}}
								>
									<legend>Sign In</legend>
									<fieldset disabled={loading} aria-busy={loading}>
										<legend>Sign into your account</legend>
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
											<label htmlFor="password">Password</label>
											<input
												type="password"
												name="password"
												placeholder="password"
												value={this.state.password}
												onChange={this.saveToState}
											/>
										</div>
										<div className="smoelt_form--group password-forgot">
											<Link href="/request">
												<a>Forgot your password?</a>
											</Link>
										</div>
										<div className="smoelt_form--group form-submit">
											<SubmitButton type="submit">Sign In!</SubmitButton>
										</div>
										<div className="smoelt_form--group form-gate">
											<span>Need an account?</span>{" "}
											<Link href="/signup">
												<a>Sign Up</a>
											</Link>
										</div>
									</fieldset>
								</LoginForm>
							</section>
						</main>
					)}
				</Mutation>
			</InnerLoginPage>
		);
	}
}

export default Signin;
