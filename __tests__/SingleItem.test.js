import { mount } from "enzyme";
import toJSON from "enzyme-to-json";
import wait from "waait";
import SingleItem, { SINGLE_ITEM_QUERY } from "../components/SingleItem";
import { MockedProvider } from "react-apollo/test-utils";
import { fakeItem } from "../lib/testUtils";

describe("<SingleItem/>", () => {
	it("renders with proper data", async () => {
		const mocks = [
			{
				// when someone makes a request with this query/varibale combo,
				request: { query: SINGLE_ITEM_QUERY, variables: { id: "123" } },
				// return this mocked data
				result: {
					data: {
						item: fakeItem(),
					},
				},
			},
		];
		const wrapper = mount(
			<MockedProvider mocks={mocks}>
				<SingleItem id="123" />
			</MockedProvider>
		);
		// console.log(wrapper.debug());
		expect(wrapper.text()).toContain("Loading...");
		await wait();
		wrapper.update();
		// console.log(wrapper.debug());
		expect(toJSON(wrapper.find("h2"))).toMatchSnapshot();
		expect(toJSON(wrapper.find("img"))).toMatchSnapshot();
		expect(toJSON(wrapper.find("p"))).toMatchSnapshot();
	});

	it("errors with a not found item", async () => {
		const mocks = [
			{
				request: { query: SINGLE_ITEM_QUERY, variables: { id: "123" } },

				result: {
					data: {
						errors: [
							{
								message: "No item found for 123",
							},
						],
					},
				},
			},
		];
		const wrapper = mount(
			<MockedProvider mocks={mocks}>
				<SingleItem id="123" />
			</MockedProvider>
		);
		await wait();
		wrapper.update();
		console.log(wrapper.debug());
		const item = wrapper.find('[data-test="graphql-error"]');
		console.log(item.debug());
		expect(item.text()).toContain("No item found for");
		expect(toJSON(item)).toMatchSnapshot();
	});
});
