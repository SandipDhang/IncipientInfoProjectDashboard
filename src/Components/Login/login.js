import React, { Component } from "react";
import Axios from "axios";
import "../style.css";

const url = "http://php.demo4work.com/dev6/practical_api/api/auth/login";

class Login extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
    };
  }

  updateEmail = (event) => {
    this.setState({ email: event.target.value });
  };
  updatePass = (event) => {
    this.setState({ password: event.target.value });
  };

  handleLogin = () => {
    console.log(this.state.email, this.state.password);
    const loginDetails = {
      email: this.state.email,
      password: this.state.password,
    };
    console.log(loginDetails);

    Axios.post(url, loginDetails).then((res) => {
      console.log(res);
      if (res.data.status === 1) {
        sessionStorage.setItem("token_No", res.data.data.access_token);
        this.props.history.push("/dashboard");
      } else {
        alert("Try Again");
      }
    });
  };

  render() {
    return (
      <div className="FormContainer">
        <div className="InputBx">
          <h1>Login</h1>
          <p>Sign in to your account</p>
          <div className="EmailInputBx">
            <label htmlFor="email">
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                className="bi bi-person"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6 5c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"
                />
              </svg>
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              onChange={this.updateEmail}
            />
          </div>
          <div className="PassInputBx">
            <label htmlFor="password">
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                className="bi bi-lock"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M11.5 8h-7a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1zm-7-1a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-7zm0-3a3.5 3.5 0 1 1 7 0v3h-1V4a2.5 2.5 0 0 0-5 0v3h-1V4z"
                />
              </svg>
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              onChange={this.updatePass}
            />
          </div>
          <div className="buttonHolder">
            <button type="submit" onClick={this.handleLogin}>
              Login
            </button>
            <button type="submit">Forgot Password</button>
          </div>
        </div>
        <div className="FormDesc">
          <h1>Signup</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button type="submit">Register Now</button>
        </div>
      </div>
    );
  }
}

export default Login;
