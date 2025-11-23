import React, { useState } from "react";
import "./Login.css";
// import logo from '../../assets/logo.png'
import { logIn, signUp } from "../../Firebase";

const Login = () => {
  const [signState, setSignState] = useState("Sign In");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const user_auth = async (e) => {
    e.preventDefault();
    if (signState === "Sign In") {
      await logIn(email, password);
    } else {
      await signUp(name, email, password);
    }
  };

  return (
    <div className="login">
      <div className="login-form">
        <h1>{signState}</h1>
        <form>
          {signState === "Sign Up" ? (
            <input
              value={name}
              type="text"
              name="text"
              autoComplete="name"
              placeholder="Your Name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          ) : null}
          <input
            value={email}
            type="email"
            name="email"
            autoComplete="email"
            placeholder="E-mail"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            value={password}
            type="password"
            name="password"
            autoComplete="current-password"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button type="submit" onClick={user_auth}>
            {signState}
          </button>
          <div className="form-help">
            <div className="remember">
              <input
                type="checkbox"
                name="checkbox"
                id="checkbox"
                autoComplete="off"
              />
              <label htmlFor="checkbox">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
          {signState === "Sign In" ? (
            <p>
              New to Netflix{" "}
              <span
                onClick={() => {
                  setSignState("Sign Up");
                }}
              >
                Sign Up Now
              </span>
            </p>
          ) : (
            <p>
              Already have account?{" "}
              <span
                onClick={() => {
                  setSignState("Sign In");
                }}
              >
                Sign In
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
