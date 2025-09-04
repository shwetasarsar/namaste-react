import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body"
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import MOCK_DATA from "../Mocks/ResListDataMock.json";
import { act } from "react";

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: ()=> {
            return Promise.resolve(MOCK_DATA);
        }
    })
})


it ("should Search rest list for Cake text input", async()=>{
    await act(async () =>{
        render(<BrowserRouter><Body /></BrowserRouter>)
    })

    const cardsBeforeClick = screen.getAllByTestId("resCard");

    expect(cardsBeforeClick.length).toBe(15);

    const searchBtn = screen.getByRole("button", {name: "Search"});

    const searchInput = screen.getByTestId("searchInput");

    fireEvent.change(searchInput, {target: {value: "cake"} });

    fireEvent.click(searchBtn);

    const cardsAfterSearch = screen.getAllByTestId("resCard");

    expect(cardsAfterSearch.length).toBe(5);
})

it ("should filter top rated restaurant", async()=>{
    await act(async ()=>{
        render(<BrowserRouter><Body /></BrowserRouter>)
    })

    const cardsBeforeFilter = screen.getAllByTestId("resCard");

    expect(cardsBeforeFilter.length).toBe(15);

    const filterBtn = screen.getByRole("button", {name: "Top rated restaurant"});

    fireEvent.click(filterBtn);

    const cardsAfterClick = screen.getAllByTestId("resCard");

    expect(cardsAfterClick.length).toBe(1);
})