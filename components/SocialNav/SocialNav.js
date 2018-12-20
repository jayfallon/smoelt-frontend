import styled from "styled-components";

const SocialNav = styled.nav`
	padding-bottom: 8rem;

	ul {
		margin: 0 auto;
		padding: 0;
		display: flex;
		justify-content: center;
	}

	li {
		margin: 0 1.1rem;
		width: 3.6rem;
		height: 3.6rem;
		color: hsla(0, 0%, 44%, 1);
		position: relative;
		display: flex;
		align-items: center;
	}

	li.item-facebook a,
	li.item-twitter a,
	li.item-youtube a,
	li.item-instagram a {
		background-image: url(/static/images/GD_iconset.svg);
		width: 3.6rem;
		height: 3.6rem;
	}

	li a {
		background-repeat: no-repeat;
		color: hsla(0, 0%, 44%, 1);
	}

	li.item-facebook a {
		background-position: -30px -1053px;
	}

	li.item-facebook a:hover {
		background-position: -30px -1117px;
	}

	li.item-twitter a {
		background-position: -95px -1053px;
	}

	li.item-twitter a:hover {
		background-position: -95px -1117px;
	}

	li.item-youtube a {
		background-position: -157px -1053px;
	}

	li.item-youtube a:hover {
		background-position: -157px -1117px;
	}

	li.item-instagram a {
		background-position: -220px -1053px;
	}

	li.item-instagram a:hover {
		background-position: -220px -1117px;
	}

	li span {
		display: none;
	}
`;

export default SocialNav;
