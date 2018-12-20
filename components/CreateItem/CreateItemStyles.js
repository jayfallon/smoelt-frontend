import styled from "styled-components";

const CreateItemWrapper = styled.div`
	background-color: #f8f8f8;
	margin: ${props => props.theme.margin};
	padding: ${props => props.theme.padding};
`;

const CreateItemStyles = styled.section`
	background-color: #f8f8f8;
	margin: ${props => props.theme.margin};
	padding: 8rem 0 16rem;
	max-width: 80rem;
	form {
		color: ${props => props.theme.smoeltBlack};
	}
	.create_inner {
		background: pink;
		margin: ${props => props.theme.margin};
		padding: ${props => props.theme.padding};
	}
	h3 {
		padding-bottom: 2.5rem;
		font-family: GothamBold, sans-serif;
		font-size: 2.8rem;
		line-height: 1.71;
		letter-spacing: 2.5px;
		text-align: center;
		text-transform: uppercase;
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
		font-family: GothamBold, sans-serif;
		font-size: 1.6rem;
		line-height: 1.25;
	}

	.smoelt_form--group input[type="text"],
	.smoelt_form--group input[type="email"],
	.smoelt_form--group input[type="password"],
	.smoelt_form--group textarea {
		background-color: #f8f8f8;
		padding: 1.2rem 1.4rem;
		border: 0.1rem solid #cecece;
		font-size: 1.6rem;
	}

	.smoelt_form--group input[type="checkbox"] {
		background-color: #181818;
		margin-right: 1rem;
		width: 2rem;
		height: 2rem;
		border: 0.1rem solid #fff;
	}

	.smoelt_form--group span {
		font-family: GothamBook;
		font-size: 1.4rem;
	}

	.smoelt_form--group.form-submit {
		margin-top: 4.4rem;
		text-align: center;
		justify-content: center;
		align-items: center;
	}

	.smoelt_form--group.form-gate {
		padding-bottom: 10rem;
		font-family: GothamBold, sans-serif;
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
		font-family: GothamBold, sans-serif;
		font-size: 1.6rem;
	}

	a {
		color: ${props => props.theme.smoeltBlack};
	}
`;

export default CreateItemStyles;

export { CreateItemWrapper };
