import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import Contact from "../Contact"

describe("Contact US Page Test Cases", ()=>{

    beforeAll(()=>{
        console.log("before all")
    });

    beforeEach(()=>{
        console.log("before each");
    })

    afterEach(()=>{
        console.log("after each")
    })

    afterAll(()=>{
        console.log("after each")
    })

    it("Should load contact us component", ()=>{
        render(<Contact />)
    
        const heading = screen.getByRole("heading");
    
        expect(heading).toBeInTheDocument();
    })
    
    it("Should load button inside Contact component", ()=>{
        render(<Contact />);
    
        const button = screen.getByRole("button");
    
        expect(button).toBeInTheDocument();
    })
    
    it("Should load name input inside Contact component", ()=>{
        render(<Contact />);
    
        const placeholder = screen.getByPlaceholderText("name")
    
        expect(placeholder).toBeInTheDocument();
    })
    
    it("Should load 2 input boxes in the Contact component", ()=>{
        render(<Contact />)
    
        const inputBoxes = screen.getAllByRole("textbox");
    
        expect(inputBoxes.length).toBe(2);
    })
})