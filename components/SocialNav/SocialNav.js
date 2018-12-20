import Link from "next/link";
import SocialNavStyles from "./SocialNavStyles";

const SocialNav = () => (
	<SocialNavStyles>
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
	</SocialNavStyles>
);

export default SocialNav;
