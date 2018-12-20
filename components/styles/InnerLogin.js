import styled from "styled-components";

const InnerLoginPage = styled.div`
	margin: 0 auto;
	padding: 0 1rem;
	max-width: 44.8rem;
	a {
		color: ${props => props.theme.boseWhite};
	}
`;

const LoginForm = styled.form`
	margin: ${props => props.theme.margin};
	max-width: 41.6rem;
	color: ${props => props.theme.boseWhite};
	fieldset {
		border: 0;
	}

	legend {
		display: none;
	}

	.sapphire_form--group {
		margin-bottom: 3.2rem;
		display: flex;
		flex-direction: column;
	}

	.sapphire_form--group.form-check {
		flex-direction: row;
	}

	.sapphire_form--group label {
		padding-bottom: 0.8rem;
		font-family: GothamBold, sans-serif;
		font-size: 1.6rem;
		line-height: 1.25;
	}

	.sapphire_form--group input[type="text"],
	.sapphire_form--group input[type="email"],
	.sapphire_form--group input[type="password"],
	.sapphire_form--group textarea {
		background-color: #f8f8f8;
		padding: 1.2rem 1.4rem;
		border: 0.1rem solid #f8f8f8;
		font-size: 1.6rem;
	}

	.sapphire_form--group input[type="checkbox"] {
		background-color: #181818;
		margin-right: 1rem;
		width: 2rem;
		height: 2rem;
		border: 0.1rem solid #fff;
	}

	.sapphire_form--group.form-submit {
		margin-top: 4.4rem;
		text-align: center;
		justify-content: center;
		align-items: center;
	}

	.sapphire_form--group.form-gate {
		padding-bottom: 10rem;
		font-family: GothamBold, sans-serif;
		font-size: 1.7rem;
		display: flex;
		flex-direction: row;
		justify-content: center;
	}

	.sapphire_form--group.form-gate span {
		margin-right: 0.8rem;
	}

	.sapphire_form--group.reset-message {
		font-size: 1.6rem;
		line-height: 1.44;
	}

	.sapphire_form--group.password-forgot {
		font-family: GothamBold, sans-serif;
		font-size: 1.6rem;
	}
`;

export { InnerLoginPage, LoginForm };
