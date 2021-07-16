import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import { useContext, useRef } from "react";

function Login() {
  const { user, isFetching, error, dispatch } = useContext(AuthContext);

  const email = useRef();
  const pwd = useRef();
  const handleLogin = (e) => {
    e.preventDefault();
    loginCall({ email: email.current.value, pwd: pwd.current.value }, dispatch);
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
        <div className="btn">
          <button type="submit">Log In</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
