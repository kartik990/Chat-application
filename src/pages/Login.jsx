import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChatContext } from "../context/ChatContext";
import { auth } from "../firebase";
import "./../style.scss";

const Login = () => {
  const [error, setError] = useState(false);
  const naviagte = useNavigate();

  const { dispatch } = useContext(ChatContext);

  useEffect(() => {
    dispatch({ type: "RESET", payload: null });
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      naviagte("/");
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Chat App</span>
        <span className="title">Log in</span>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="enter password" />
          <button>Log in</button>
        </form>
        <p>
          You don't have an account? <Link to="/register">Register</Link>
        </p>
        {error && (
          <span style={{ color: "red" }}>Something went wrong....</span>
        )}
      </div>
    </div>
  );
};

export default Login;
