import Link from "next/link";
import { Mutation } from "react-apollo";
import NavStyles from "../styles/NavStyles";
import User from "../User/User";
import Signout from "../Signout/Signout";
import { TOGGLE_CART_MUTATION } from "../Cart/Cart";
import CartCount from "../CartCount/CartCount";
import CartItem from "../CartItem/CartItem";

const Nav = () => (
	<User>
		{({ data: { me } }) => (
			<NavStyles data-test="nav">
				<Link href="/items">
					<a>List/Home</a>
				</Link>
				{me && (
					<>
						<Link href="/sell">
							<a>Create</a>
						</Link>
						<Link href="/orders">
							<a>Orders</a>
						</Link>
						<Link href="/me">
							<a>Account</a>
						</Link>
						<Signout />
						<Mutation mutation={TOGGLE_CART_MUTATION}>
							{toggleCart => (
								<button onClick={toggleCart}>
									My Cart
									<CartCount
										count={me.cart.reduce((tally, cartItem) => tally + cartItem.quantity, 0)}
									/>
								</button>
							)}
						</Mutation>
					</>
				)}
				{!me && (
					<Link href="/signup">
						<a>Sign in</a>
					</Link>
				)}
			</NavStyles>
		)}
	</User>
);

export default Nav;
