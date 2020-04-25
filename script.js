const googleDatabase = [
	"cats.com",
	"souprecipies.com",
	"flowers.com",
	"animals.com",
	"catpictures.com",
	"myfavouritecat.com",
	"myfavouritecat2.com"
]

const googleSearch = (searchInput, db) => {
	const matches = db.filter(website => {
		return website.includes(searchInput);
	});

	return matches.slice(0, 3);
}

// console.log(googleSearch("cat", googleDatabase));

module.exports = googleSearch;
