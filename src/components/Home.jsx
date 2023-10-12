import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
//import LandingPage from "./components/LandingPage";
import Login from "./login/Login";
import SignUp from "./login/SignUp";
import Theme from "./Theme";
import Upcoming from "./Upcoming";
import Today from "./Today";
//import Home from '../components/Home'
//import MenuBar from "./MenuBar";
import WorkingArea from "./WorkingArea";

function Home() {


  return (
    <Router>
      <div className="App m-10">
        <Theme />
        <WorkingArea />
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

export default Home;