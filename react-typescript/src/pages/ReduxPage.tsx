import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MainStore from '../store/MainStore';
const ReduxPage = ()=>{
    let lateststate:any;
    const subscriberr:any = useSelector(state=>state);
    console.log(subscriberr);
const dispatcher = useDispatch();
    const clickedDisp = (par:any)=>{
        dispatcher({type:'MODE_CHANGE',payload:par})
    }
    
    return (
        <div>This is redux page
            <p>Mode is <span>{subscriberr.mode}</span></p>

            <button onClick={()=>{clickedDisp('dark')}} >Change mode to dark</button>
        </div>
    )
}

export default ReduxPage;