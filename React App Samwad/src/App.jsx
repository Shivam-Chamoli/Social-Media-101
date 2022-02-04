import React, { useContext } from "react";
import axios from "axios";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import LoginSignUp from "./pages/LoginSignUp/LoginSignUp";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
axios.defaults.baseURL = "https://samwaad-rest-api.herokuapp.com/api/";

// axios.defaults.baseURL = "http://localhost:8800/api/";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {user ? <Home /> : <Redirect to="/login-signup" />}
        </Route>
        <Route exact path="/login-signup">
          {user ? <Redirect to="/" /> : <LoginSignUp />}
        </Route>
        <Route exact path="/profile/:username">
          <Profile />
        </Route>
        <Route path="/">
          {user ? <Home /> : <Redirect to="/login-signup" />}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
