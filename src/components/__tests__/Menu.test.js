import "@testing-library/jest-dom";
import { render, waitFor, fireEvent } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu"
import Header from "../Header"
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";
import { MENU_DATA } from "../../mocks/data";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MENU_DATA);
        }
    })
})

test("Add Items to Cart", async () => {
    const restaurantMenu = render(
        <StaticRouter>
            <Provider store={store}>
                <Header />
                <RestaurantMenu />
            </Provider>
        </StaticRouter>
    )

    await waitFor(() => expect(restaurantMenu.getByTestId("menu")));

    const addBtn = restaurantMenu.getAllByTestId("addBtn")

    fireEvent.click(addBtn[0])

    const cart = restaurantMenu.getByTestId("cart")

    expect(cart.innerHTML).toBe("Cart - 1 items")

})