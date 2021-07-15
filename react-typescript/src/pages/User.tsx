import React from 'react';
import {withRouter} from 'react-router-dom';

const User = (props:any)=>{
    console.log(props);
    return(
        <div>
            <h1>This is user {props.match.params.userId}</h1> 

        </div>
    )
}

export default withRouter(User);