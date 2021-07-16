import React from "react";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import LoginSignUp from "./pages/Login_SignUp/LoginSignUp";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/login-signup">
          <LoginSignUp />
        </Route>

        <Route exact path="/profile/:username">
          <Profile />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
