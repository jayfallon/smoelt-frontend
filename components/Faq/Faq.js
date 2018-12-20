import Link from "next/link";
import FaqJumbo from "./FaqJumbo";
import FaqStyles, { FaqSupport } from "./FaqStyles";
import DashboardStyles from "../styles/DashboardStyles";

const Faq = () => (
	<div>
		<DashboardStyles />

		<FaqJumbo />
		<main>
			<FaqStyles>
				<div className="faq_questions--inner">
					<h3>General Questions</h3>
					<div className="faq_questions--wrapper">
						<div className="faq_questions--grid">
							<h4>What are Smoelt &amp; Co.'s Landing Pages?</h4>
							<h4>Why should I join Landing Pages?</h4>
							<h4>Am I eligible to participate?</h4>
							<h4>How do I sign up for Landing Pages?</h4>
						</div>
						<div className="faq_questions--grid">
							<h4>How do I sign up for Landing Pages?</h4>
							<h4>Can I opt out of Landing Pages email notifications?</h4>
							<h4>How do I change my primary email? </h4>
							<h4>What if I forgot my password?</h4>
						</div>
					</div>
				</div>
				<div className="faq_questions--inner">
					<h3>EARNING RAFFLES TICKETS</h3>
					<div className="faq_questions--wrapper">
						<div className="faq_questions--grid">
							<h4>If You Had To Work But Didn’t Need The Money, What Would You Choose To Do?</h4>
							<h4> What Is In Your Fridge Right Now?</h4>
							<h4>
								{" "}
								If You Were Home On A Rainy Sunday Afternoon, What Movie Would You Most Want To See On
								Television?
							</h4>
							<h4>Where Do You Not Mind Waiting?</h4>
						</div>
						<div className="faq_questions--grid">
							<h4>
								If You Could Close One Fast Food Chain, Due To Disgusting Food, What Would You Pick?
							</h4>
							<h4>If You Could Dis-Invent One Thing, What Would It Be?</h4>
							<h4>If You Could Be A Member Of Any TV-Sitcom Family, Which Would It Be?</h4>
							<h4>What Would Be The Best Thing About Not Having A Sense Of Smell?</h4>
						</div>
					</div>
				</div>
				<div className="faq_questions--inner">
					<h3>using your raffle tickets</h3>
					<div className="faq_questions--wrapper">
						<div className="faq_questions--grid">
							<h4>
								When Scrolling Through Social Media, Do You Prefer Posts From Celebrities Or From Your
								Best Friends?
							</h4>
							<h4>Is There An App That You Hate But Use Anyways?</h4>
							<h4>What Is The Stupidest Thing You’ve Done Because Someone Dared You To?</h4>
							<h4>What Is The Stupidest Thing You’ve Done On Your Own Free Will?</h4>
						</div>
						<div className="faq_questions--grid">
							<h4>What Part Of Your Body Could Use A Little Lotion?</h4>
							<h4>What Part Of The Human Face Is Your Favorite?</h4>
							<h4>Do You Do Dance Crazy When No One Is Looking?</h4>
							<h4>What Was The Best Thing Before Sliced Bread?</h4>
						</div>
					</div>
				</div>
			</FaqStyles>
			<FaqSupport>
				<div className="support-inner">
					<h4>Support</h4>
					<p>
						For all Landing Pages questions, please reach out to the Smoelt &amp; Co. team at{"  "}
						<Link href="mailto:help@smoelt.com">
							<a>help@smoelt.com</a>
						</Link>
					</p>
				</div>
			</FaqSupport>
		</main>
	</div>
);

export default Faq;
