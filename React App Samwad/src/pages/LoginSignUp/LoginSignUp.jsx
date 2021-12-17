import { useState } from "react";
import Login from "./Login";
import "./LoginSignUp.css";
import Signup from "./Signup";
import { ReactComponent as YourSvg } from "./social.svg";

//fucntion is here
function LoginSignUp() {
  const [isLogin, setIsLogin] = useState(true);
  const changeLoginRegister = () => {
    isLogin ? setIsLogin(false) : setIsLogin(true);
  };

  return (
    <div className="LoginSignUp">
      <div className="sidebar">
        <div className="logo-details">
          <h1 id="logo-name">SamWaad</h1>
          <h1 id="logo-slogan">Conversations That Matter</h1>
        </div>
        <div className="sidebar-bottom">
          <span id="sidebar-bottom-span">
            Get Connected With Your <em>Friends</em> and <em>Family</em>
          </span>
          <YourSvg className="sidebar-bottom-img" />
        </div>
      </div>
      <div className="login-Signup-bar">
        {isLogin ? <Login /> : <Signup />}
        <div className="isLoginCheck">
          {isLogin ? (
            <span>
              Not a member, Join us today.{" "}
              <i className="changeLoginRegister" onClick={changeLoginRegister}>
                Register
              </i>
            </span>
          ) : (
            <span>
              Already a member, Login{" "}
              <im className="changeLoginRegister" onClick={changeLoginRegister}>
                Here
              </im>
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default LoginSignUp;
