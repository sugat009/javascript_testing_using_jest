const fetch = require("node-fetch");

const getPokemonPromise = fetch => {
	return fetch("https://pokeapi.co/api/v2/pokemon/")
		.then(response => response.json())
		.then(data => {
			return {
				count: data.count,
				results: data.results
			};
		});
}

const getPokemon = async (fetch) => {
	const res = await fetch("https://pokeapi.co/api/v2/pokemon/")
	const data = await res.json();
	return {
		count: data.count,
		results: data.results
	};
}

module.exports = {
	getPokemon,
	getPokemonPromise
};
