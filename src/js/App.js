import React from "react";
import MainApp from '../js/app/MainApp';
import {
  HashRouter,
  Route,
  Switch, 
} from 'react-router-dom'

import Main from "./components/Main";


function App(){ 
    return (
      <HashRouter>
        <Switch>
          <Route  exact path="/" component={Main}/>
          <Route path='/mainApp/' component={MainApp} />
        </Switch>  
      </HashRouter>
    );

  }


export default App;
