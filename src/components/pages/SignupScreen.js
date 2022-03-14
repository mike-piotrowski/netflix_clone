import React from "react";
import { useHref } from "react-router-dom";
import { authentication } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import "./SignupScreen.css";

function SignupScreen() {
  const emailRef = useHref(null);
  const passwordRef = useHref(null);

  const register = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(
      authentication,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const signIn = (e) => {
    e.preventDefault();
  };

  return (
    <div className="signupScreen">
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} placeholder="Email" type="email" />
        <input ref={passwordRef} placeholder="Password" type="password" />
        <button type="submit" onClick={signIn}>
          Sign In
        </button>
        <h4>
          <span className="signupScreen__gray">New to Netflix? </span>
          <span className="signupScreen__link" onClick={register}>
            Sign up now.{" "}
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SignupScreen;