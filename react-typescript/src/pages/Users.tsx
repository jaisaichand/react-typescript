import React from 'react';
import {Route, Link,withRouter} from 'react-router-dom';
import User from './User';

const Users = (match:any)=>{
    console.log(match);
    let userId = 3;
    
    return(
        <div>
            This is users   
            <Link to={match.match.url +"/user/"+ userId} >

           Take to user1
            </Link>
            <Route path={match.match.url+"/user/:userId"} component={User} />
        </div>
    )
}

export default withRouter(Users);