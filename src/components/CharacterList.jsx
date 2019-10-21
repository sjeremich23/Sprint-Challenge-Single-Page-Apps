import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";
import axios from "axios";
import styled from "styled-components";

const ListContainer = styled.div`
	width: 100%;
	margin: 1%;
	display: flex;
	flex-flow: row wrap;
`;

const CharacterList = () => {
	// TODO: Add useState to track data from useEffect
	const [characters, setCharacters] = useState([]);
	const [query, setQuery] = useState("");

	useEffect(() => {
		// TODO: Add API Request here - must run in `useEffect`
		//  Important: verify the 2nd `useEffect` parameter: the dependancies array!

		axios
			.get("https://rickandmortyapi.com/api/character/")
			.then(response => {
				console.log(response);
				const searchResults = response.data.results.filter(character =>
					character.name.toLowerCase().includes(query.toLowerCase())
				);
				setCharacters(searchResults);
			})
			.catch(error => {
				console.error("Server Error", error);
			});
	}, [query]);

	const handleInputChange = e => {
		e.preventDefault();
		setQuery(e.target.value);
	};

	return (
		<div>
			<SearchForm handleInputChange={handleInputChange} query={query} />
			<section className="character-list">
				<ListContainer>
					{characters.map((character, i) => {
						return <CharacterCard key={i} name={character.name} imgage={character.image} />;
					})}
				</ListContainer>
			</section>
		</div>
	);
};

export default CharacterList;
