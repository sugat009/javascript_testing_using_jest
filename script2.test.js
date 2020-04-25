const fetch = require("node-fetch");
const pokeApi = require("./script2");


// The done() function is used to wait on asynchronous functions
// using return statements on promise statements is same as using done because it also waits
// on the promise to complete
it("calls pokeApi to get pokemon", () => {
	// This is a sanity statement meaning that it is helpful in determining whether the
	// actual assertions are happening or not
	expect.assertions(1);
	return pokeApi.getPokemon(fetch).then(data => {
		expect(data.count).toEqual(964);
	});
});


it("calls pokeApi to get pokemon using promise", () => {
	expect.assertions(2);
	return pokeApi.getPokemonPromise(fetch).then(data => {
		expect(data.count).toEqual(964);
		expect(data.results.length).toBeGreaterThan(5);
	});
});


it("getPokemon returns count and results", () => {
	// Mocking the API call using jest
	const mockFetch = jest.fn().mockReturnValue(
		Promise.resolve({
			json: () => Promise.resolve({
				count: 964,
				results: [0,1,2,3,4,5]
			})
		}));
	expect.assertions(4);

	return pokeApi.getPokemonPromise(mockFetch).then(data => {
		expect(mockFetch.mock.calls.length).toBe(1);
		expect(mockFetch).toBeCalledWith("https://pokeapi.co/api/v2/pokemon/");
		expect(data.count).toEqual(964);
		expect(data.results.length).toBeGreaterThan(5);
	});
});
