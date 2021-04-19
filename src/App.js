import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "./components/Login";
import "./styles.scss";

import PrivateRoute from "./components/PrivateRoute";
import BubblePage from "./components/BubblePage"

function App() {

  const logout = () => {
    localStorage.removeItem('payload')
  }

  return (
    <Router>
      <div className="App">
        <header>
          Color Picker Sprint Challenge
          <a data-testid="logoutButton" href='/' onClick={logout} >logout</a>
        </header>
          <Route exact path="/" component={Login} />
          <PrivateRoute path="/colors" component={BubblePage} />        
      </div>
    </Router>
  );
}

export default App;

//Task List:
//1. Render BubblePage as a PrivateRoute
//2. Build the logout button to remove the localStorage Item.