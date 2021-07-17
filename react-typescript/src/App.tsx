import React, { useState } from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';

import './App.css';
import MyContext from './context/context';
import FirstComponent from './components/firstcomponent/firstcomponent';
import Home from './pages/Home';
import Users from './pages/Users';
import ReduxPage from './pages/ReduxPage';

function App() {
  const [localstate, updateLocalstate] = useState('light');
  return (
    <BrowserRouter>
    

    <MyContext.Provider value={{value:localstate,updatevalue:updateLocalstate}} >
    <div style={{display:'flex', justifyContent:'space-between'}} >

      <div>
        <Link to="/context" >context</Link>
        </div>

      <div>
      <Link to="/redux" >Redux</Link>
      </div>

      <div>  
      <Link to="/reduxforms" >Redux Forms</Link>
      </div>

     
    </div>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/users" component={Users} />
      <Route path="/redux" component={ReduxPage} />
      <Route path="/context" component={FirstComponent} />
      <Route path="/reduxforms" component={ReduxPage} />
      <Route path="*" component={Home} />
    </Switch>
    </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
