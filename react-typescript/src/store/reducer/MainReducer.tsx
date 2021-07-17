import * as _ from 'lodash';
export let initialState = {mode:'light',sellers:[],customers:[{name:'Jai sai chand',ordersCount:1,isPrime:false,id:String(new Date()+String(Math.random())+'-'+String(Math.random()))},{name:'Nikhil',ordersCount:8,isPrime:true,id:String(new Date()+String(Math.random())+'-'+String(Math.random()))},{name:'Raghavendra',ordersCount:1,isPrime:false,id:String(new Date()+String(Math.random())+'-'+String(Math.random()))},{name:'Jai surya',ordersCount:1,isPrime:false,id:String(new Date()+String(Math.random())+'-'+String(Math.random()))},{name:'Anusha',ordersCount:2,isPrime:false,id:String(new Date()+String(Math.random())+'-'+String(Math.random()))},{name:'Suriya',ordersCount:4,isPrime:false,id:String(new Date()+String(Math.random())+'-'+String(Math.random()))},{name:'Jaswant',ordersCount:2,isPrime:false,id:String(new Date()+String(Math.random())+'-'+String(Math.random()))},{name:'Sri Teja',ordersCount:5,isPrime:false,id:String(new Date()+String(Math.random())+'-'+String(Math.random()))}]}

const MainReducer = (state=initialState,action:any) =>{
    console.log(action);
    if(action){
        if(action.type=='MODE_CHANGE'){
            let tempState = _.cloneDeep(state);
            tempState.mode = action.payload;
            console.log(tempState);
            
            return tempState;
        }
    }
    return state;
    
}

export default MainReducer;