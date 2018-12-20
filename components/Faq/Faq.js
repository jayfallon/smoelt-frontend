import Link from "next/link";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import FaqJumbo from "./FaqJumbo";
import FaqStyles, { FaqSupport } from "./FaqStyles";
import DashboardStyles from "../styles/DashboardStyles";

const Faq = () => (
	<div>
		<DashboardStyles />
		<Header />
		<FaqJumbo />
		<main>
			<FaqStyles>
				<div className="faq_questions--inner">
					<h3>General Questions</h3>
					<div className="faq_questions--wrapper">
						<div className="faq_questions--grid">
							<div className="faq_question">
								<input id="ac-1" name="accordion-1" type="checkbox" />
								<label htmlFor="ac-1">
									<span>What are Smoelt & Co.'s Landing Pages?</span>
								</label>
								<article className="display">
									<p>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam error nesciunt
										consequuntur ea accusantium ut repudiandae natus? In hic earum, perspiciatis
										fugit maxime natus cupiditate eius, dolor illo nisi sed?
									</p>
								</article>
							</div>
							<div className="faq_question">
								<input id="ac-2" name="accordion-1" type="checkbox" />
								<label htmlFor="ac-2">
									<span>Why should I join Landing Pages?</span>
								</label>
								<article className="display">
									<p>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam error nesciunt
										consequuntur ea accusantium ut repudiandae natus? In hic earum, perspiciatis
										fugit maxime natus cupiditate eius, dolor illo nisi sed?
									</p>
								</article>
							</div>
							<div className="faq_question">
								<input id="ac-3" name="accordion-1" type="checkbox" />
								<label htmlFor="ac-3">
									<span>Am I eligible to participate?</span>
								</label>
								<article className="display">
									<p>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam error nesciunt
										consequuntur ea accusantium ut repudiandae natus? In hic earum, perspiciatis
										fugit maxime natus cupiditate eius, dolor illo nisi sed?
									</p>
								</article>
							</div>
							<div className="faq_question">
								<input id="ac-4" name="accordion-1" type="checkbox" />
								<label htmlFor="ac-4">
									<span>How do I sign up for Landing Pages?</span>
								</label>
								<article className="display">
									<p>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam error nesciunt
										consequuntur ea accusantium ut repudiandae natus? In hic earum, perspiciatis
										fugit maxime natus cupiditate eius, dolor illo nisi sed?
									</p>
								</article>
							</div>
						</div>
						<div className="faq_questions--grid">
							<div className="faq_question">
								<input id="ac-6" name="accordion-1" type="checkbox" />
								<label htmlFor="ac-6">
									<span>Can I opt out of Landing Pages email notifications?</span>
								</label>
								<article className="display">
									<p>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam error nesciunt
										consequuntur ea accusantium ut repudiandae natus? In hic earum, perspiciatis
										fugit maxime natus cupiditate eius, dolor illo nisi sed?
									</p>
								</article>
							</div>
							<div className="faq_question">
								<input id="ac-7" name="accordion-1" type="checkbox" />
								<label htmlFor="ac-7">
									<span>How do I change my primary email?</span>
								</label>
								<article className="display">
									<p>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam error nesciunt
										consequuntur ea accusantium ut repudiandae natus? In hic earum, perspiciatis
										fugit maxime natus cupiditate eius, dolor illo nisi sed?
									</p>
								</article>
							</div>

							<div className="faq_question">
								<input id="ac-9" name="accordion-1" type="checkbox" />
								<label htmlFor="ac-9">
									<span>How do I change my primary email?</span>
								</label>
								<article className="display">
									<p>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam error nesciunt
										consequuntur ea accusantium ut repudiandae natus? In hic earum, perspiciatis
										fugit maxime natus cupiditate eius, dolor illo nisi sed?
									</p>
								</article>
							</div>
							<div className="faq_question">
								<input id="ac-10" name="accordion-1" type="checkbox" />
								<label htmlFor="ac-10">
									<span>What if I forgot my password?</span>
								</label>
								<article className="display">
									<p>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam error nesciunt
										consequuntur ea accusantium ut repudiandae natus? In hic earum, perspiciatis
										fugit maxime natus cupiditate eius, dolor illo nisi sed?
									</p>
								</article>
							</div>
						</div>
					</div>
				</div>
				<div className="faq_questions--inner">
					<h3>CREATING A LANDING PAGE</h3>
					<div className="faq_questions--wrapper">
						<div className="faq_questions--grid">
							<div className="faq_question">
								<input id="ac-11" name="accordion-1" type="checkbox" />
								<label htmlFor="ac-11">
									<span>
										If You Had To Work But Didn’t Need The Money, What Would You Choose To Do?
									</span>
								</label>
								<article className="display">
									<p>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam error nesciunt
										consequuntur ea accusantium ut repudiandae natus? In hic earum, perspiciatis
										fugit maxime natus cupiditate eius, dolor illo nisi sed?
									</p>
								</article>
							</div>
							<div className="faq_question">
								<input id="ac-12" name="accordion-1" type="checkbox" />
								<label htmlFor="ac-12">
									<span>What Is In Your Fridge Right Now?</span>
								</label>
								<article className="display">
									<p>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam error nesciunt
										consequuntur ea accusantium ut repudiandae natus? In hic earum, perspiciatis
										fugit maxime natus cupiditate eius, dolor illo nisi sed?
									</p>
								</article>
							</div>
							<div className="faq_question">
								<input id="ac-13" name="accordion-1" type="checkbox" />
								<label htmlFor="ac-13">
									<span>
										If You Were Home On A Rainy Sunday Afternoon, What Movie Would You Most Want To
										See On Television?
									</span>
								</label>
								<article className="display">
									<p>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam error nesciunt
										consequuntur ea accusantium ut repudiandae natus? In hic earum, perspiciatis
										fugit maxime natus cupiditate eius, dolor illo nisi sed?
									</p>
								</article>
							</div>
							<div className="faq_question">
								<input id="ac-14" name="accordion-1" type="checkbox" />
								<label htmlFor="ac-14">
									<span>Where Do You Not Mind Waiting?</span>
								</label>
								<article className="display">
									<p>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam error nesciunt
										consequuntur ea accusantium ut repudiandae natus? In hic earum, perspiciatis
										fugit maxime natus cupiditate eius, dolor illo nisi sed?
									</p>
								</article>
							</div>
						</div>
						<div className="faq_questions--grid">
							<div className="faq_question">
								<input id="ac-16" name="accordion-1" type="checkbox" />
								<label htmlFor="ac-16">
									<span>
										If You Could Close One Fast Food Chain, Due To Disgusting Food, What Would You
										Pick?
									</span>
								</label>
								<article className="display">
									<p>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam error nesciunt
										consequuntur ea accusantium ut repudiandae natus? In hic earum, perspiciatis
										fugit maxime natus cupiditate eius, dolor illo nisi sed?
									</p>
								</article>
							</div>
							<div className="faq_question">
								<input id="ac-17" name="accordion-1" type="checkbox" />
								<label htmlFor="ac-17">
									<span>If You Could Dis-Invent One Thing, What Would It Be?</span>
								</label>
								<article className="display">
									<p>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam error nesciunt
										consequuntur ea accusantium ut repudiandae natus? In hic earum, perspiciatis
										fugit maxime natus cupiditate eius, dolor illo nisi sed?
									</p>
								</article>
							</div>
							<div className="faq_question">
								<input id="ac-18" name="accordion-1" type="checkbox" />
								<label htmlFor="ac-18">
									<span>If You Could Be A Member Of Any TV-Sitcom Family, Which Would It Be?</span>
								</label>
								<article className="display">
									<p>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam error nesciunt
										consequuntur ea accusantium ut repudiandae natus? In hic earum, perspiciatis
										fugit maxime natus cupiditate eius, dolor illo nisi sed?
									</p>
								</article>
							</div>
							<div className="faq_question">
								<input id="ac-19" name="accordion-1" type="checkbox" />
								<label htmlFor="ac-19">
									<span>What Would Be The Best Thing About Not Having A Sense Of Smell?</span>
								</label>
								<article className="display">
									<p>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam error nesciunt
										consequuntur ea accusantium ut repudiandae natus? In hic earum, perspiciatis
										fugit maxime natus cupiditate eius, dolor illo nisi sed?
									</p>
								</article>
							</div>
						</div>
					</div>
				</div>
				<div className="faq_questions--inner">
					<h3>FUTURE FEATURES & DIRECTION</h3>
					<div className="faq_questions--wrapper">
						<div className="faq_questions--grid">
							<div className="faq_question">
								<input id="ac-20" name="accordion-1" type="checkbox" />
								<label htmlFor="ac-20">
									<span>
										When Scrolling Through Social Media, Do You Prefer Posts From Celebrities Or
										From Your Best Friends?
									</span>
								</label>
								<article className="display">
									<p>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam error nesciunt
										consequuntur ea accusantium ut repudiandae natus? In hic earum, perspiciatis
										fugit maxime natus cupiditate eius, dolor illo nisi sed?
									</p>
								</article>
							</div>
							<div className="faq_question">
								<input id="ac-21" name="accordion-1" type="checkbox" />
								<label htmlFor="ac-21">
									<span>Is There An App That You Hate But Use Anyways?</span>
								</label>
								<article className="display">
									<p>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam error nesciunt
										consequuntur ea accusantium ut repudiandae natus? In hic earum, perspiciatis
										fugit maxime natus cupiditate eius, dolor illo nisi sed?
									</p>
								</article>
							</div>
						</div>
						<div className="faq_questions--grid">
							<div className="faq_question">
								<input id="ac-22" name="accordion-1" type="checkbox" />
								<label htmlFor="ac-22">
									<span>What Is The Stupidest Thing You’ve Done Because Someone Dared You To?</span>
								</label>
								<article className="display">
									<p>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam error nesciunt
										consequuntur ea accusantium ut repudiandae natus? In hic earum, perspiciatis
										fugit maxime natus cupiditate eius, dolor illo nisi sed?
									</p>
								</article>
							</div>
							<div className="faq_question">
								<input id="ac-23" name="accordion-1" type="checkbox" />
								<label htmlFor="ac-23">
									<span>What Is The Stupidest Thing You’ve Done On Your Own Free Will?</span>
								</label>
								<article className="display">
									<p>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam error nesciunt
										consequuntur ea accusantium ut repudiandae natus? In hic earum, perspiciatis
										fugit maxime natus cupiditate eius, dolor illo nisi sed?
									</p>
								</article>
							</div>
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
		<Footer />
	</div>
);

export default Faq;
