import React from 'react';
import {Route, Link,withRouter} from 'react-router-dom';
import User from './User';

const Users = (match:any)=>{
    console.log(match);
    let userId = 3;
    let usersArr = [{name:'jai',id:1},{name:'sai',id:2},{name:'chandu',id:3}]
    
    return(
        <div>
            This is users   
            {usersArr.map(data=>(
                <div key={data.id} >

                <Link to={match.match.url +"/user/"+ data.id} >
                    {data.name}
                </Link>
                </div>
                
            )
            )}

            <Route path={match.match.url+"/user/:userId"} component={User} />
        </div>
    )
}

export default withRouter(Users);