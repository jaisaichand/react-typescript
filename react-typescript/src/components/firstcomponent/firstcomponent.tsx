import React,{useContext,useEffect} from 'react';
import MyContext from '../../context/context';

function FirstComponent(){

    let contextdata = useContext(MyContext);
    console.log(contextdata);
    
    useEffect(()=>{
        let timeoutt = setTimeout(()=>{
            if(contextdata.value=='light'){
                contextdata.updatevalue('dark')
            }else{
                console.log('dfjk');
                
                contextdata.updatevalue('light')
            }
        },2200)

        return ()=>{
            try{
                clearTimeout(timeoutt);
            }catch{
                console.log('error');
            }
            
        }
    },[])
    
    return (
        <div>
            <h1>This is the first component</h1>
            <h1>Current value in the context is  <span style={{color:'cyan'}} >{contextdata.value}</span> </h1>
        </div>
    )

}

export default FirstComponent;