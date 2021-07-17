import { createStore } from "redux"
import MainReducer,{initialState} from "./reducer/MainReducer"

let statData = {...initialState};

const MainStore =(state=initialState)=>{
return createStore(MainReducer,state);
}

export default MainStore;