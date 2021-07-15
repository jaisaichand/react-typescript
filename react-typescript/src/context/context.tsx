import {createContext} from 'react';

let someFunction:any;
const MyContext = createContext({value:'',updatevalue:someFunction});

export default MyContext;