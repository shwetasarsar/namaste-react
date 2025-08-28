import React from "react";
import User from "./user";


class UserClass extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            count: 0
        }
        
    }

    render(){
        const { name, location, contact } = this.props;
        return(
            <div className="user-card">
                <h1>count: {this.state.count}</h1>
                <button onClick={()=>{
                    this.setState({count: this.state.count + 1});
                }}>Click to Add</button>
                <div>Name: {name}</div>
                <div>Location: {location}</div>
                <div>Contact: {contact}</div>
            </div>
        );
    }
}

export default UserClass;