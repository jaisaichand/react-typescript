import React, { useState } from 'react';

import './App.css';
import MyContext from './context/context';
import FirstComponent from './components/firstcomponent/firstcomponent';

function App() {
  const [localstate, updateLocalstate] = useState('light');
  return (
    <MyContext.Provider value={{value:localstate,updatevalue:updateLocalstate}} >
    <div className="App">
     <FirstComponent />
    </div>
    </MyContext.Provider>
  );
}

export default App;
