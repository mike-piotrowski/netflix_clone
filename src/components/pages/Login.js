import React, { useState } from "react";
import "./LoginScreen.css";
import SignupScreen from "./SignupScreen";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {
  const [signIn, setSignIn] = useState(false);

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const signInNew = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <img
          className="loginScreen__logo"
          src="https://lh3.googleusercontent.com/InFdxcnIz2sQFE89WTeZ5HhZ6GejTWDKGpQM02QJWXHqc0XrpwINWXsBUK7PZMMLLw=h1024-no-tmp_movies_hub_free_movies_tv_box_hd_apk_poster.jpg"
          alt=""
        />
        <button onClick={() => setSignIn(true)} className="loginScreen__button">
          Sign In
        </button>
        <div className="loginScreen__gradient"></div>
      </div>
      <div className="loginScreen__body">
        {signIn ? (
          <SignupScreen />
        ) : (
          <>
            <h1>Unlimited films, TV programmes and more.</h1>
            <h2>Watch anywhere. Cancel at any time.</h2>
            <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
            <form>
              <h1>Sign Up</h1>
              <input
                value={loginEmail}
                placeholder="Email"
                type="email"
                onChange={(event) => {
                  setLoginEmail(event.target.value);
                }}
              />
              <input
                value={loginPassword}
                placeholder="Password"
                type="password"
                onChange={(event) => {
                  setLoginPassword(event.target.value);
                }}
              />
              <button type="submit" onClick={signInNew}>
                Sign Up
              </button>
              <h4>
                <span className="signupScreen__gray">New to Netflix? </span>
                <span className="signupScreen__link" onClick={registerEmail}>
                  Sign up now.{" "}
                </span>
              </h4>
            </form>
            <div className="loginScreen__input">
              <form>
                <input type="email" placeholder="Email Adress" />
                <button onClick={() => setSignIn(true)} className="loginScreen__getStarted">
                  GET STARTED
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
