import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.div`
	display: flex;
	justify-content: center;
	a {
		color: #000;
		text-decoration: none;
	}

	span {
		margin: 1%;
	}
`;

export default function Header() {
	return (
		<header className="ui centered">
			<h1 className="ui center">Rick &amp; Morty Fan Page</h1>
			<Nav>
				<span>
					<Link to="/">Home</Link>
				</span>
				<span>
					<Link to="/characters">Characters</Link>
				</span>
			</Nav>
		</header>
	);
}
