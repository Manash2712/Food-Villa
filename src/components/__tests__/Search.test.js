import Body from "../Body"
import { render, waitFor, fireEvent } from "@testing-library/react"
import { Provider } from "react-redux"
import store from '../../utils/store.js'
import { StaticRouter } from "react-router-dom/server"
import { RESTAURANT_DATA } from "../../mocks/data"
import "@testing-library/jest-dom"

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(RESTAURANT_DATA)
        }
    })
});

test("Shimmer should load on Homepage", () => {

    const body = render(
        <StaticRouter>
            <Provider store={store}>
                <Body />
            </Provider>
        </StaticRouter>
    );
    // console.log(body);

    const shimmer = body.getByTestId("shimmer");

    // expect(shimmer).toBeInTheDocument();
    expect(shimmer.children.length).toBe(10);

    // console.log(shimmer);
})

test("Restaurants should load on Homepage", async () => {
    const body = render(
        <StaticRouter>
            <Provider store={store}>
                <Body />
            </Provider>
        </StaticRouter>
    );

    await waitFor(() => expect(body.getByTestId("search-btn")))

    const restaurantList = body.getByTestId("restaurant-list")

    expect(restaurantList.children.length).toBe(15)

})

test("Search for string(food) on Homepage", async () => {
    const body = render(
        <StaticRouter>
            <Provider store={store}>
                <Body />
            </Provider>
        </StaticRouter>
    );

    await waitFor(() => expect(body.getByTestId("search-btn")))

    const input = body.getByTestId("search-input")

    fireEvent.change(input, {
        target: {
            value: "food",
        }
    })

    const searchBtn = body.getByTestId("search-btn");

    fireEvent.click(searchBtn);

    const restaurantList = body.getByTestId("restaurant-list")

    expect(restaurantList.children.length).toBe(1)

})