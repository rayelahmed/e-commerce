import React, { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import "./SignUp.css";
import auth from "../../firebase.init";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import Footer from "../../Shared/Footer/Footer";

const SignUp = () => {
  const [createUserWithEmailAndPassword, user] =
    useCreateUserWithEmailAndPassword(auth);
  const navigate = useNavigate();

  if (user) {
    navigate("/");
  }

  const handleRegister = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    createUserWithEmailAndPassword(email, password, name);
  };

  return (
    <div>
      <div className=" register-form">
        <h2 style={{ textAlign: "center" }}>Register</h2>
        <form onSubmit={handleRegister} className="register">
          <input type="text" name="name" id="" placeholder="Your Name" />

          <input
            type="email"
            name="email"
            id=""
            placeholder="Email Address"
            required
          />

          <input
            type="password"
            name="password"
            id=""
            placeholder="Password"
            required
          />
          <input type="submit" id="submit" value="Register" />
        </form>
        <p>
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-danger pe-auto text-decoration-none"
          >
            Please Login
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default SignUp;
