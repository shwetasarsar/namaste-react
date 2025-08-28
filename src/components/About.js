import React from 'react';
import User from './user';
import UserClass from './UserClass';

const About = () => {
  return (
    <div>
        <>About Us</>
        {/* <User name="Shweta Sarsar" location="Ahmednagar" contact="@shwetasarsar"/> */}
        <UserClass name="Shweta Sarsar Class" location="Ahmednagar" contact="@shwetasarsar"/>
    </div>
    
  )
}

export default About