import React from 'react';
import {Link} from 'react-router-dom';
let Home = (match:any)=>{
    console.log(match);
    
    return (
        <div>Hi,, this is home component
            <Link to="/users" >Click to go to users</Link>
        </div>
    )
}

export default Home;