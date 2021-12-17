import { useContext, useRef } from "react";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

function Signup() {
  const { dispatch } = useContext(AuthContext);
  const email = useRef();
  const pwd = useRef();
  const pwdCheck = useRef();
  const username = useRef();
  const handleRegister = async (e) => {
    e.preventDefault();

    if (pwd.current.value === pwdCheck.current.value) {
      const newUser = {
        email: email.current.value,
        password: pwd.current.value,
        username: username.current.value,
      };
      console.log(newUser);
      const req = await axios.post("auths/register", newUser);
      console.log(req);
      //directing user to Home page
      loginCall(
        { email: email.current.value, pwd: pwd.current.value },
        dispatch
      );
    } else {
      pwd.current.setCustomValidity("Passwords Do Not Match");
      pwdCheck.current.setCustomValidity("Passwords Do Not Match");
    }
  };
  return (
    <div className="signUp">
      <h1>Sign Up</h1>
      <form action="/" onSubmit={handleRegister} className="form">
        <div className="form-item">
          <label htmlFor="name">Email</label>
          <input
            required
            type="email"
            id="email"
            name="email"
            placeholder="Enter Your email"
            ref={email}
          />
        </div>
        <div className="form-item">
          <label htmlFor="fname">Username</label>
          <input
            type="text"
            placeholder="Enter Your Username"
            id="fname"
            name="fname"
            ref={username}
            required
          />
        </div>
        <div className="form-item">
          <label htmlFor="Password">Password</label>
          <input
            type="password"
            placeholder="Enter Your Pasword"
            id="userPassword"
            required
            minLength="6"
            ref={pwd}
          />
        </div>
        <div className="form-item">
          <label htmlFor="Password">Re Enter Password</label>
          <input
            type="text"
            placeholder="Re Enter Your Pasword"
            id="checkUserPassword"
            required
            minLength="6"
            ref={pwdCheck}
          />
        </div>
        <div className="btn">
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
