import styled from "styled-components";

const InnerLoginPage = styled.div`
	margin: 0 auto;
	padding: 0 1rem;
	max-width: 44.8rem;
	a {
		color: ${props => props.theme.smoeltWhite};
	}
`;

const LoginForm = styled.form`
	margin: ${props => props.theme.margin};
	max-width: 41.6rem;
	color: ${props => props.theme.smoeltWhite};
	fieldset {
		border: 0;
	}

	legend {
		display: none;
	}

	.smoelt_form--group {
		margin-bottom: 3.2rem;
		display: flex;
		flex-direction: column;
	}

	.smoelt_form--group.form-check {
		flex-direction: row;
	}

	.smoelt_form--group label {
		padding-bottom: 0.8rem;
		font-family: ${props => props.theme.fontBold};
		font-size: 1.6rem;
		line-height: 1.25;
	}

	.smoelt_form--group input[type="text"],
	.smoelt_form--group input[type="email"],
	.smoelt_form--group input[type="password"],
	.smoelt_form--group textarea {
		background-color: ${props => props.theme.offWhite};
		padding: 1.2rem 1.4rem;
		border: 0.1rem solid ${props => props.theme.lightGray};
		font-size: 1.6rem;
	}

	.smoelt_form--group input[type="checkbox"] {
		background-color: ${props => props.theme.smoeltBlack};
		margin-right: 1rem;
		width: 2rem;
		height: 2rem;
		border: 0.1rem solid ${props => props.theme.smoeltWhite};
	}

	.smoelt_form--group.form-submit {
		margin-top: 4.4rem;
		text-align: center;
		justify-content: center;
		align-items: center;
	}

	.smoelt_form--group.form-gate {
		padding-bottom: 10rem;
		font-family: ${props => props.theme.fontBold};
		font-size: 1.7rem;
		display: flex;
		flex-direction: row;
		justify-content: center;
	}

	.smoelt_form--group.form-gate span {
		margin-right: 0.8rem;
	}

	.smoelt_form--group.reset-message {
		font-size: 1.6rem;
		line-height: 1.44;
	}

	.smoelt_form--group.password-forgot {
		font-family: ${props => props.theme.fontBold};
		font-size: 1.6rem;
	}

	h2 {
		padding: 2rem 0;
		font-size: 2.4rem;
		text-align: center;
	}
	h4 {
		padding: 2rem 0;
		font-size: 2rem;
		text-align: center;
	}
`;

export { InnerLoginPage, LoginForm };
