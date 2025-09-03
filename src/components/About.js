import React from 'react';
import User from './user';
import UserClass from './UserClass';
import UserContext from '../utils/UserContext';

class About extends React.Component{
    constructor(props){
        super(props);

        //console.log("parent constructor");
    }

    componentDidMount(){
        //console.log("parent component did mount")
    }
    
    render(){
        //console.log("parent render");
        return (
            <div>
                <h1>About Us</h1>
                <div>Logged In User: 
                <UserContext.Consumer>
                    {({loggedInUser})=> <h1 className='font-bold'>{loggedInUser}</h1>}
                </UserContext.Consumer>
                </div>
                <UserClass/>
            </div>
            
          )
    }
  
}

export default About