import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
//import LandingPage from "./components/LandingPage";
import Login from "./components/login/Login";
import SignUp from "./components/login/SignUp";
import Theme from "./components/Theme";

function App() {


  return (
    <Router>
      <div className="App">
        <Theme />
        <Switch>
          <Route path='/signin' exact component={SignUp} />
          <Route path='/login' exact component={Login} />
          
        </Switch>
        
      </div>
    </Router>
  );
}

export default App;
