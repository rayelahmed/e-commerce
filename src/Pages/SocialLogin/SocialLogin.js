import React from "react";
import google from "../../images/logo/google-logo.png";

import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useNavigate } from "react-router-dom";
import "./SocialLogin.css";

const SocialLogin = () => {
  const [signInWithGoogle, user, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();

  let errorElement;

  if (error) {
    errorElement = (
      <p className="text-danger">
        Error: {error?.message} {}
      </p>
    );
  }

  if (user) {
    navigate("/");
  }

  return (
    <div>
      <div className="d-flex">
        <div style={{ height: "1px" }} className="bg-primary  w-25"></div>
        <p className="mt-2 px-2">or</p>
        <div style={{ height: "1px" }} className="bg-primary w-25"></div>
      </div>
      {errorElement}
      <div className="">
        <button
          onClick={() => signInWithGoogle()}
          className="btn  d-block mx-auto my-2"
          id="btn-dark"
        >
          <img style={{ width: "30px" }} src={google} alt="" />
          <span className="px-2">Google Sign In</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
