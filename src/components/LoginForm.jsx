import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { submitAuthForm } from "../services/auth.service";

const LoginForm = (props) => {
  const [fullName, setFullName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let body;
    if (props.path === "/login") {
      body = { email: emailAddress, password: password };
    } else {
      body = { fullName: fullName, email: emailAddress, password: password };
    }
    const result = await submitAuthForm(body, props.path);

    switch (result.status) {
      case 200:
        //Logged In. Set token in cookies
        document.cookie = `token=${result.token}`;
        setErrors("");
        //redirect to home page
        navigate(`/`);
        break;
      case 201:
        //User added. Return them to login page
        setErrors("");
        navigate(`/login`, {
          state: {
            signUpMessage: "Account successfully created. Please log in.",
          },
        });
        break;
      case 400:
        //Bad request
        setErrors(result.message);
        break;
      case 401:
        //Invalid credentials
        setErrors(result.message);
        break;
      case 404:
        //User not found
        setErrors(result.message);
        break;
      default:
        setErrors("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="container row align-self-center z-1">
      <h1 className="text-white">
        Sign {props.path === "/login" ? "In" : "Up"}
      </h1>
      <form
        className="text-white"
        action={props.path === "/login" ? "/login" : "/signup"}
        onSubmit={handleSubmit}
      >
        {props.path === "/sign-up" && (
          <div data-mdb-input-init className="form-outline mb-4">
            <label className="form-label" htmlFor="fullName">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              className="form-control"
              placeholder="Enter your full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
        )}
        <div data-mdb-input-init className="form-outline mb-4">
          <label className="form-label" htmlFor="emailAddress">
            Email
          </label>
          <input
            type="email"
            id="emailAddress"
            className="form-control"
            placeholder="Enter your email"
            value={emailAddress}
            onChange={(e) => setEmailAddress(e.target.value)}
          />
        </div>
        <div data-mdb-input-init className="form-outline mb-4">
          <label className="form-label" htmlFor="loginPassword">
            Password
          </label>
          <input
            type="password"
            id="loginPassword"
            className="form-control"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          data-mdb-button-init
          data-mdb-ripple-init
          className="btn btn-primary btn-block mb-4"
        >
          {props.path === "/login" ? "Login" : "Sign Up"}
        </button>
        {props.path === "/login" && (
          <div className="text-center">
            <p className="text-white">
              Not a member? <a href="/sign-up">Register Here</a>
            </p>
          </div>
        )}
        {errors !== "" && <div className="errors">{errors}</div>}
      </form>
    </div>
  );
};

export default LoginForm;
