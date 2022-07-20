import React, { useState, useEffect } from "react";

const APIEjemplo = () => {
	const[pokemon, setPokemon] = useState({});
	const url = "https://pokeapi.co/api/v2/pokemon/gastly";
	useEffect( () => {
		fetch(url)
		.then(response => response.json() )
		.then((res) => setPokemon(res));
	}, []);

	return(
		<>
			<h2>{pokemon.name}</h2>
			<img src={pokemon.sprites.front_default}/>
		</>
	)
};

export default APIEjemplo; 

		