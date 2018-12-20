import Link from "next/link";
import { Mutation } from "react-apollo";
import User from "../User/User";
import Signout from "../Signout/Signout";
import { TOGGLE_CART_MUTATION } from "../Cart/Cart";
import CartCount from "../CartCount/CartCount";
import NavStyles, { Logo, CreateButton } from "./NavStyles";

const Nav = () => (
	<User>
		{({ data: { me } }) => (
			<NavStyles data-test="nav">
				<nav className="smoelt_dashboard--nav">
					<ul className="smoelt_dashboard--logo">
						<li>
							<Logo>
								<a href="/">
									<span>Smoelt &amp; Co.</span>
								</a>
							</Logo>
						</li>
						<li>
							<h3>landing pages</h3>
						</li>
					</ul>
					<ul className="smoelt_dashboard--menu">
						<li>
							<Link href="/help">
								<a>help</a>
							</Link>
						</li>
						<li>
							<Link href="/faq">
								<a>faq</a>
							</Link>
						</li>
						<li>
							<Link href="/contact">
								<a>contact</a>
							</Link>
						</li>
						{me && (
							<>
								<li>
									<Link href="/create">
										<CreateButton type="button">create!</CreateButton>
									</Link>
								</li>
								<li>
									<Link href="/orders">
										<a>Orders</a>
									</Link>
								</li>
								<li>
									<Link href="/me">
										<a>Account</a>
									</Link>
								</li>
								<Signout />
								<Mutation mutation={TOGGLE_CART_MUTATION}>
									{toggleCart => (
										<button onClick={toggleCart}>
											My Cart
											<CartCount
												count={me.cart.reduce(
													(tally, cartItem) => tally + cartItem.quantity,
													0
												)}
											/>
										</button>
									)}
								</Mutation>
							</>
						)}
						{!me && (
							<li>
								<Link href="/signup">
									<a>Sign in</a>
								</Link>
							</li>
						)}
					</ul>
				</nav>
			</NavStyles>
		)}
	</User>
);

export default Nav;
