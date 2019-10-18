import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
	margin: 3% auto;
	background-color: orange;
	box-shadow: 0 5px 10px 0px #000;
	text-align: center;
`;

const CharacterCard = props => {
	// console.log(props);
	return (
		<CardWrapper>
			<div>
				<h3>{props.name}</h3>
				<img src={props.imgage} alt="" />
			</div>
		</CardWrapper>
	);
};

export default CharacterCard;
