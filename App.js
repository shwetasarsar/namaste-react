import React, { Component } from "react";
import ReactDOM from "react-dom/client";

//React Element
const jsxHeading = (
    <h1 className="heading">
        Namaste React 🚀
    </h1>
);

const Title =()=>(<h1>this is functional component</h1>)

//component composition - component inside one another
const HeadingComponent = ()=>{
    return (
        <div>
            {Title()}
            <Title />
            <Title></Title>
            <h1 className="heading">This is heading component</h1>
        </div>
    )
}
 
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />)
