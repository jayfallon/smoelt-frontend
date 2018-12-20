import Link from "next/link";
import FooterStyles from "./FooterStyles";
import SocialNav from "../SocialNav/SocialNav";

const Footer = () => (
	<FooterStyles>
		<SocialNav>
			<ul>
				<li className="item-facebook">
					<Link href="">
						<a>
							<span>facebook</span>
						</a>
					</Link>
				</li>
				<li className="item-twitter">
					<Link href="">
						<a>
							<span>twitter</span>
						</a>
					</Link>
				</li>
				<li className="item-youtube">
					<Link href="">
						<a>
							<span>youtube</span>
						</a>
					</Link>
				</li>
				<li className="item-instagram">
					<Link href="">
						<a>
							<span>instagram</span>
						</a>
					</Link>
				</li>
			</ul>
		</SocialNav>
		<p className="smoelt_footer--content">
			Need help? email{" "}
			<Link href="mailto:">
				<a>help@smoelt.com</a>
			</Link>
		</p>
		<nav className="smoelt_footer--info-nav">
			<ul>
				<li>
					<Link href="">
						<a>privacy &amp; cookies</a>
					</Link>
				</li>
				<li>
					<Link href="">
						<a>technical support</a>
					</Link>
				</li>
				<li>
					<Link href="">
						<a>terms &amp; conditions</a>
					</Link>
				</li>
			</ul>
		</nav>
	</FooterStyles>
);

export default Footer;
