const googleSearch = require("./script");

dbMock = [
	"dog.com",
	"cheesepuff.com",
	"muttonchops.com",
	"isitacat.com",
	"disney.com",
	"dogpictures.com"
];


describe("googleSearch related", () => {
	it("First test", () => {
		expect("hello").toBe("hello");
	});


	it("search db", () => {
		expect(googleSearch("testtest", dbMock)).toEqual([]);
		expect(googleSearch("dog", dbMock)).toEqual(["dog.com", "dogpictures.com"]);
	});


	it("work with undefined and null input", () => {
		expect(googleSearch(undefined, dbMock)).toEqual([]);
		expect(googleSearch(null, dbMock)).toEqual([]);
	});


	it("does not return more than 3 matches", () => {
		expect(googleSearch(".com", dbMock).length).toEqual(3);
	});
});
