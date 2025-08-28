import React from 'react';
import User from './user';
import UserClass from './UserClass';

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
                <>About Us</>
                <UserClass/>
            </div>
            
          )
    }
  
}

export default About