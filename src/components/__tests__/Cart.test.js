import { fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "../Mocks/ResMenuDataMock.json";
import { act } from "react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import Cart from "../Cart";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: ()=>{
            return Promise.resolve(MOCK_DATA)
        }
    })
})

it ("should render Restaurant Menu Component", async()=>{
    await act(async ()=> render(
        <Provider store={appStore}>
            <RestaurantMenu />
        </Provider>
    ))

    const totalItems = screen.getAllByTestId("foodItems");

    expect(totalItems.length).toBe(14);
})

it ("should click on Restaurant Menu button to add into cart", async()=>{
    await act(async ()=> render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header />
            <RestaurantMenu />
            <Cart />
        </Provider>
        </BrowserRouter>
    ))

    const beforeSelectedItem = screen.getByText("Cart - (0 items)");

    expect(beforeSelectedItem).toBeInTheDocument();

    const totalItems = screen.getAllByTestId("foodItems");

    expect(totalItems.length).toBe(14);

    const addButton = screen.getAllByRole("button", {name: "Add +"});

    fireEvent.click(addButton[0]);

    const afterSelectedItem = screen.getByText("Cart - (1 items)");

    expect(afterSelectedItem).toBeInTheDocument();

    const removeMenuBtn = screen.getByRole("button", {name: "Remove -"});

    expect(removeMenuBtn).toBeInTheDocument();

    expect(fireEvent.click(removeMenuBtn));

    fireEvent.click(screen.getByRole("button", {name: "Clear Cart"}));

    expect(screen.getByText("Cart is empty, Add items to the cart!"));
})