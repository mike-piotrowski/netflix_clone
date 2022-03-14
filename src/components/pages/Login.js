import React, { useState } from "react";
import "./LoginScreen.css";
import SignupScreen from "./SignupScreen";

const Login = () => {
  const [signIn, setSignIn] = useState(false);

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
