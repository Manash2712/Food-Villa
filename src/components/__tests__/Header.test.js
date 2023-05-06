import { render } from "@testing-library/react"
import Header from "../Header";
import { Provider } from 'react-redux'
import store from "../../utils/store"
import { StaticRouter } from "react-router-dom/server"

test("Logo should load on rendering header", () => {

    // Load Header
    const header = render(
        <StaticRouter>
            <Provider store={store}>
                <Header />
            </Provider>;
        </StaticRouter>

    )

    // Check if logo is loaded
    const logo = header.getAllByTestId("logo");

    // console.log(logo[0]);

    expect(logo[0].src).toBe("http://localhost/dummy.png")

})

test("Online Status should be green on rendering header", () => {
    const header = render(
        <StaticRouter>
            <Provider store={store}>
                <Header />
            </Provider>
        </StaticRouter>
    )

    const onlineStatus = header.getByTestId("online-status")

    // console.log(onlineStatus);

    expect(onlineStatus.innerHTML).toBe("🟢")
})

test("Cart should have 0 items on rendering header", () => {
    const header = render(
        <StaticRouter>
            <Provider store={store}>
                <Header />
            </Provider>
        </StaticRouter>
    )
    const cart = header.getByTestId("cart")

    expect(cart.innerHTML).toBe("Cart - 0 items");
})