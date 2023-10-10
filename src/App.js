import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
//import LandingPage from "./components/LandingPage";
import Login from "./components/login/Login";
import SignUp from "./components/login/SignUp";
import Theme from "./components/Theme";
import Upcoming from "./components/Upcoming";
import Today from "./components/Today";

function App() {


  return (
    <Router>
      <div className="App m-10">
        <Theme />
        <Switch>
          <Route path='/signin' exact component={SignUp} />
          <Route path='/login' exact component={Login} />
          <Route path='/today' exact component={Today} />
          <Route path='/upcoming' exact component={Upcoming} />
        </Switch>
        
      </div>
    </Router>
  );
}

export default App;
