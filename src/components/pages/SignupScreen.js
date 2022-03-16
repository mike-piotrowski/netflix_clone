import React from "react";
import { useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";
import "./SignupScreen.css";

function SignupScreen() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <div className="signupScreen">
      <form>
        <h1>Sign Up</h1>
        <input
          value={registerEmail}
          placeholder="Email"
          type="email"
          onChange={(event) => {
            setRegisterEmail(event.target.value);
          }}
        />
        <input
          value={registerPassword}
          placeholder="Password"
          type="password"
          onChange={(event) => {
            setRegisterPassword(event.target.value);
          }}
        />
        <button type="submit" onClick={register}>
          Sign Up
        </button>
        <h4>
          <span className="signupScreen__gray">New to Netflix? </span>
          <span className="signupScreen__link" onClick={registerEmail}>
            Sign up now.{" "}
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SignupScreen;
