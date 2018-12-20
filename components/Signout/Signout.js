import React, { Component } from "react";
import Link from "next/link";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import { CURRENT_USER_QUERY } from "../User/User";

const SIGN_OUT_MUTATION = gql`
	mutation SIGN_OUT_MUTATION {
		signout {
			message
		}
	}
`;

const Signout = props => (
	<Mutation mutation={SIGN_OUT_MUTATION} refetchQueries={[{ query: CURRENT_USER_QUERY }]}>
		{signout => (
			<li>
				<Link href="/signedout">
					<a onClick={signout}>Sign Out</a>
				</Link>
			</li>
		)}
	</Mutation>
);

export default Signout;
