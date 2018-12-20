import ContactHeader from "../Contact/ContactHeader";
import Link from "next/link";
import { InnerLoginPage, LoginForm } from "../styles/InnerLogin";
import { createGlobalStyle } from "styled-components";

const GlobalContactStyle = createGlobalStyle`
    body {
        background-image: url(/static/images/andre-benz-230282-unsplash.png);
        background-repeat: no-repeat;
        background-position: center top -200px;
        background-color: ${props => props.theme.boseBlack};
        color: ${props => props.theme.boseRed};
        height: 100vh;
    }
`;

const ContactReceived = () => (
	<InnerLoginPage>
		<GlobalContactStyle />
		<ContactHeader
			heading={
				"We read you loud and clear! Depending on the nature of your message, someone will be in touch shortly. You can always reach us at help@smoelt.com."
			}
		/>
		<main>
			<section>
				<LoginForm action="">
					<fieldset>
						<legend>Message Received</legend>
						<div className="smoelt_form--group form-gate">
							<Link href="/">
								<a>Back to Smoelt</a>
							</Link>
						</div>
					</fieldset>
				</LoginForm>
			</section>
		</main>
	</InnerLoginPage>
);

export default ContactReceived;
