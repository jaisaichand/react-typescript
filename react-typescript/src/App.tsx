import React, { useState } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import './App.css';
import MyContext from './context/context';
import FirstComponent from './components/firstcomponent/firstcomponent';
import Home from './pages/Home';
import Users from './pages/Users';

function App() {
  const [localstate, updateLocalstate] = useState('light');
  return (
    <BrowserRouter>
    
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/users" component={Users} />
      <Route path="*" component={Home} />
    </Switch>

    <MyContext.Provider value={{value:localstate,updatevalue:updateLocalstate}} >
    <div className="App">
     <FirstComponent />
    </div>
    </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
