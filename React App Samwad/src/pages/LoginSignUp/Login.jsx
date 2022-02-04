import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import { useContext, useRef } from "react";
import { CircularProgress } from "@material-ui/core";

function Login() {
  const { isFetching, error, user, dispatch } = useContext(AuthContext);

  const email = useRef();
  const pwd = useRef();
  const handleLogin = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: pwd.current.value },
      dispatch
    );
    if (!isFetching && error) {
      alert("Invalid Username/Password");
    }
    console.log(user);
  };
  return (
    <div className="login">
      <h1>Login</h1>
      <form action="/" onSubmit={handleLogin}>
        <div className="form-item">
          <label htmlFor="userName">Username</label>
          <input
            type="text"
            placeholder="Enter Your Username"
            id="userName"
            ref={email}
            required
          />
        </div>
        <div className="form-item">
          <label htmlFor="Password">Password</label>
          <input
            type="password"
            placeholder="Enter Your Password"
            id="userPassword"
            ref={pwd}
            required
            minLength="6"
          />
        </div>
        <div className="login-btn">
          <button type="submit">
            {isFetching ? (
              <CircularProgress color="white" size="20px" />
            ) : (
              "Log In"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
