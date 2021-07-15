import React from 'react';
import {withRouter} from 'react-router-dom';

const User = (props:any)=>{
    console.log(props);
    return(
        <div>
            This is user

        </div>
    )
}

export default withRouter(User);