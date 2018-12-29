import ContactHeader from "./ContactHeader";
import Link from "next/link";
import styled from "styled-components";
import { InnerLoginPage, LoginForm } from "../styles/InnerLogin";
import { createGlobalStyle } from "styled-components";

const GlobalContactStyle = createGlobalStyle`
    body {
        background-image: url(/static/images/andre-benz-230282-unsplash.png);
        background-repeat: no-repeat;
        background-position: center top -200px;
        height: 100vh;
    }
`;

const SubmitButton = styled.button`
	background-color: ${props => props.theme.offWhite};
	padding: 1.75rem 2.65rem;
	min-width: 19rem;
	border: 0;
	border-radius: 2.5rem;
	color: ${props => props.theme.darkGray};
	font-family: ${props => props.theme.fontBold};
	font-size: 1.2rem;
	letter-spacing: 0.15rem;
	text-transform: uppercase;
	cursor: pointer;
	&:hover {
		background-color: ${props => props.theme.darkGray};
		color: ${props => props.theme.offWhite};
	}
	&:active {
		background-color: ${props => props.theme.smoeltBlack};
		color: ${props => props.theme.offWhite};
	}
`;

const Contact = () => (
	<InnerLoginPage>
		<GlobalContactStyle />
		<ContactHeader
			heading={"We like to do good work, but sometimes we goof. Please let us know how we're doing."}
		/>
		<main>
			<section>
				<LoginForm action="">
					<fieldset>
						<legend>Contact Us</legend>
						<div className="smoelt_form--group">
							<label htmlFor="email_address">Optional Title</label>{" "}
							<input type="email" id="email_address" />
						</div>
						<div className="smoelt_form--group">
							<label htmlFor="password">Message</label> <textarea rows="12" />
						</div>

						<div className="smoelt_form--group form-submit">
							<Link href="/contact-received">
								<SubmitButton>contact us</SubmitButton>
							</Link>
						</div>
					</fieldset>
				</LoginForm>
			</section>
		</main>
	</InnerLoginPage>
);

export default Contact;
