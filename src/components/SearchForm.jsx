import React from "react";
import styled from "styled-components";

const Center = styled.div`
	text-align: center;
	input[type="text"] {
		text-align: center;
	}
`;

export default function SearchForm(props) {
	// console.log(props);

	return (
		<section className="search-form">
			<Center>
				<form className="search">
					<input
						type="text"
						onChange={props.handleInputChange}
						value={props.query}
						name="name"
						tabIndex="0"
						className="prompt search-name"
						placeholder="search by name"
						autoComplete="off"
					/>
				</form>
			</Center>
		</section>
	);
}
