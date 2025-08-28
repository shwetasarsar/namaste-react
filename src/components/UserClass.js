import React from "react";
import User from "./user";


class UserClass extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            userData : {}
        }
        //console.log("child constructor");
    }

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/shwetasarsar");
        const userData = await data.json();
        //console.log(userData)
        this.setState({userData : userData})

        //console.log("child component did mount");

        this.timer = setInterval(()=>{
            //console.log("set interval")
        },100)
    }

    componentWillUnmount(){
        clearInterval(this.timer);
    }
    
    render(){
        //console.log("child render");

        const { name, id } = this.state.userData;
        return(
            <div className="user-card">
                <div>ID: {id}</div>
                <div>Name: {name}</div>
            </div>
        );
    }
}

export default UserClass;