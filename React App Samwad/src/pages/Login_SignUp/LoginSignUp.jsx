import "./LoginSignUp.css";

function LoginSignUp() {
  return (
    <div class="LoginSignUp">
      <div className="sidebar">
        <div className="logo-details">
          <h1 id="logo-name">SamWaad</h1>
          <h1 id="logo-slogan">Conversations That Matter</h1>
        </div>
        <div className="sidebar-bottom">
          <span id="sidebar-bottom-span">
            Get Connected With Your <em>Friends</em> and <em>Family</em>
          </span>
          <img
            src="assets/Social share-amico.svg"
            alt=""
            className="sidebar-bottom-img"
          />
        </div>
      </div>
      <div className="login-Signup-bar">
        {/* Log IN code */}
        <div className="login">
          <h1>Login</h1>
          <form action="/" method="post">
            <div class="form-item">
              <label for="userName">Username</label>
              <input
                type="text"
                placeholder="Enter Your Username"
                id="userName"
                name="userName"
              />
            </div>
            <div class="form-item">
              <label for="Password">Password</label>
              <input
                type="password"
                placeholder="Enter Your Username"
                id="userPassword"
                name="userPassword"
              />
            </div>
            <div className="btn">
              <button type="submit">Log In</button>
            </div>
          </form>
        </div>
        {/* SignUp code */}
        <div className="signUp">
          <h1>Sign Up</h1>
          <form action="/" method="post" class="form">
            <div class="form-item">
              <label for="fname">First Name</label>
              <input
                type="text"
                placeholder="Enter Your Name"
                id="fname"
                name="fname"
              />
            </div>
            <div class="form-item">
              <label for="lname">Last Name</label>
              <input
                type="text"
                placeholder="Enter Your Last Name"
                id="lname"
                name="lname"
              />
            </div>
            <div class="form-item">
              <label for="name">Email</label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Enter Your email"
              />
            </div>
            <div class="form-item">
              <label for="phoneNo">Contact Number</label>
              <input
                type="contact"
                id="phoneNo"
                name="phoneNo"
                placeholder="Enter Your Phone No."
              />
            </div>
            <div className="btn">
              <button type="submit">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginSignUp;
