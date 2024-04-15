import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import SocialLogin from "../../Pages/SocialLogin/SocialLogin";
import auth from "../../firebase.init";
import Navbar from "../../Shared/Navbar/Navbar";
import Footer from "../../Shared/Footer/Footer";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();

  const handleEmailBlur = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordBlur = (e) => {
    setPassword(e.target.value);
  };

  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (user) {
    navigate("/inventory");
  }
  if (loading) {
    return <p>Loading...</p>;
  }
  if (user) {
    return (
      <div>
        <p>Signed In User: {user.email}</p>
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInWithEmailAndPassword(email, password);
  };
  return (
    <div>
      <div className="login-form">
        <h2 style={{ textAlign: "center" }}>Login</h2>
        <form className="form" onSubmit={handleSubmit}>
          <input
            onClick={handleEmailBlur}
            type="email"
            name="email"
            placeholder="Email Address"
            required
          />

          <input
            onClick={handlePasswordBlur}
            type="password"
            name="password"
            placeholder="Password"
            required
          />
          <input type="submit" id="submit" value="Login" />
        </form>
        <p>
          Already have an account?{" "}
          <Link
            to="/signup"
            className="text-danger pe-auto text-decoration none"
          >
            Please Register
          </Link>{" "}
        </p>
      </div>

      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;
