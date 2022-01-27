import React, { useContext, lazy, Suspense } from "react";
import axios from "axios";
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

const Profile = lazy(() => import("./pages/profile/Profile"));
const Home = lazy(() => import("./pages/home/Home"));
// fallback={<div>Loading Please Wait</div>}
function App() {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Switch>
        <Suspense fallback={<LoginSignUp />}>
          <Route exact path="/">
            {user ? <Home /> : <Redirect to="/login-signup" />}
          </Route>
          <Route exact path="/profile/:username">
            <Profile />
          </Route>
        </Suspense>
        <Route exact path="/login-signup">
          {user ? <Redirect to="/" /> : <LoginSignUp />}
        </Route>
        <Route path="/">
          {user ? <Home /> : <Redirect to="/login-signup" />}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
