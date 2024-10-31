import { React, useState } from "react";
import "./Login.css";
import assets from "../../assets/assets";
import { signup, login } from "../../config/firebase";

function Login() {
  const [currentstate, setcurState] = useState("Sign up");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (currentstate == "Sign up") {
      signup(username, email, password);
    } else {
      login(email, password);
    }
  };

  return (
    <>
      <div className="login">
        <img
          src={assets.logo_big}
          alt="homepage-background image"
          className="logo"
        />
        <form onSubmit={onSubmitHandler} className="loginform">
          <h2>{currentstate}</h2>
          {currentstate === "Sign up" ? (
            <input
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              type="text"
              placeholder="USERNAME"
              className="form-input"
              required
            />
          ) : null}
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="Enter Email"
            className="form-input"
            required
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="Enter Password"
            className="form-input"
          />
          <button type="submit">
            {currentstate === "Sign up" ? "create account" : "Login"}
          </button>
          <div className="login-term">
            <input type="checkbox" />
            <p>Agree to the terms of use and privacy policy.</p>
          </div>
          <div className="login-forgot">
            {currentstate === "Sign up" ? (
              <p className="login-toggle">
                Already have an account
                <span
                  onClick={() => {
                    setcurState("Login");
                  }}
                >
                  {" "}
                  click here{" "}
                </span>{" "}
              </p>
            ) : (
              <p className="login-toggle">
                Create an account
                <span
                  onClick={() => {
                    setcurState("Sign up");
                  }}
                >
                  click here
                </span>
              </p>
            )}
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
