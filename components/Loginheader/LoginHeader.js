import styled from "styled-components";

const LoginHeading = styled.header`
	color: #f8f8f8;
	h1 {
		margin-top: 2rem;
		display: flex;
		justify-content: center;
		align-items: center;
		a {
			background-image: url(/static/images/smoelt-logo.png);
			background-repeat: no-repeat;
			background-position: center center;
			background-size: 44rem 8.6rem;
			width: 44rem;
			height: 8.6rem;
			@media screen and (max-width: 400px) {
				background-size: 38rem 7.427rem;
				width: 38rem;
				height: 7.427rem;
			}
		}
		span {
			display: none;
		}
	}

	h2 {
		margin: 3rem auto 3.2rem;
		max-width: 44.8rem;
		font-family: GothamBold, sans-serif;
		font-size: 4.4rem;
		line-height: 1.05;
		letter-spacing: -0.05rem;
		text-align: center;
		text-transform: uppercase;
	}

	p {
		margin: 0 auto 3.8rem;
		max-width: 44.8rem;
		font-size: 2rem;
		line-height: 1.1;
		letter-spacing: -0.02rem;
		text-align: center;
	}
`;

const LoginHeader = props => (
	<LoginHeading>
		<h1>
			<a href="/">
				<span>Smoelt &amp; Co.</span>
			</a>
		</h1>
		<h2>Landing Pages</h2>
		<p>{props.heading}</p>
	</LoginHeading>
);

export default LoginHeader;
