function Person(name, foods) {
	this.name = name;
	this.foods = foods;
}

Person.prototype.fetchFavFoods = function() {
	return new Promise((resolve, reject) => {
		// simulate api
		setTimeout(() => resolve(this.foods), 2000);
	});
};

describe("mocking learning", () => {
	it("mocks a reg function", () => {
		const fetchDogs = jest.fn();
		fetchDogs("snickers");
		expect(fetchDogs).toHaveBeenCalled();
		expect(fetchDogs).toHaveBeenCalledWith("snickers");
		fetchDogs("hugo");
		expect(fetchDogs).toHaveBeenCalledTimes(2);
	});

	it("can fetch foods", async () => {
		const me = new Person("Jay", ["Thai", "Szechuan"]);
		const favFoods = await me.fetchFavFoods();
		console.log(favFoods);
	});

	it("can fetch foods", async () => {
		const me = new Person("Jay", ["Thai", "Szechuan"]);
		me.fetchFavFoods = jest.fn().mockResolvedValue(["sushi", "ramen"]);
		const favFoods = await me.fetchFavFoods();
		console.log(favFoods);
		expect(favFoods).toContain("sushi");
	});
});
