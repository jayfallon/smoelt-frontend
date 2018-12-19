import ItemComponent from "../components/Item";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";

const fakeItem = {
	id: "ABC123",
	title: "A basic item",
	price: 9998,
	description: "An item to test with",
	image: "item.jpg",
	largeImage: "largeItem.jpg",
};

describe("<Item/>", () => {
	it("renders and matches the snapshot", () => {
		const wrapper = shallow(<ItemComponent item={fakeItem} />);
		expect(toJSON(wrapper)).toMatchSnapshot();
	});
	// it("renders the priceTag and title properly", () => {
	// 	const wrapper = shallow(<ItemComponent item={fakeItem} />);
	// 	const PriceTag = wrapper.find("PriceTag");
	// 	// console.log(PriceTag.dive().text());
	// 	expect(PriceTag.children().text()).toBe("$99.99");
	// 	expect(wrapper.find("Title a").text()).toBe(fakeItem.title);
	// 	console.log(wrapper.debug());
	// });

	// it("renders the image properly", () => {
	// 	const wrapper = shallow(<ItemComponent item={fakeItem} />);
	// 	const img = wrapper.find("img");
	// 	// console.log(img.props());
	// 	expect(img.props().src).toBe(fakeItem.image);
	// 	expect(img.props().alt).toBe(fakeItem.title);
	// });

	// it("renders out the buttons properly", () => {
	// 	const wrapper = shallow(<ItemComponent item={fakeItem} />);
	// 	const buttonList = wrapper.find(".buttonList");
	// 	expect(buttonList.children()).toHaveLength(3);
	// 	expect(buttonList.find("Link").exists()).toBeTruthy();
	// 	expect(buttonList.find("AddToCart").exists()).toBeTruthy();
	// 	expect(buttonList.find("DeletItem").exists()).toBeTruthy();
	// });
});
