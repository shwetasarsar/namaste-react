import { render, screen } from "@testing-library/react";
import MOCK_DATA from "../../components/Mocks/RestaurantCard.json";
import "@testing-library/jest-dom"
import RestaurantCard, {withPromotedLabel} from "../RestaurantCard";

it("should load card on the Restaurant component", ()=>{
    render(
        <RestaurantCard resData={MOCK_DATA}/>
    )

    const cardName = screen.getByText("Ambrozia Cafe And Patisserie");

    expect(cardName).toBeInTheDocument();
})

it("should render Restaurant card component with Promoted label", ()=>{
    const PromotedRestaurant = withPromotedLabel(RestaurantCard);

    render(
        <PromotedRestaurant resData={MOCK_DATA}/>
    )

    const label = screen.getByText("Promoted")

    expect(label).toBeInTheDocument();
})