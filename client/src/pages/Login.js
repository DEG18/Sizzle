import React, { useRef } from "react";
import { useGlobalContext } from "../context/GlobalContext";
import { LOGIN } from "../context/actions";
import axios from "axios";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Register from "../pages/Register";
import Logo from "../assets/sizzle.jpg";

const Login = () => {
  const [state, dispatch] = useGlobalContext();

  const emailRef = useRef();
  const passwordRef = useRef();

  const doLogin = async () => {
    const { data } = await axios.post("/auth/login", {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    });

    console.log(data);
    // save the authenticated user data in local storage
    localStorage.setItem("authUser", JSON.stringify(data));
    // save the authenticated user data in local storage
    dispatch({
      type: LOGIN,
      user: data,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    doLogin();
  };

  const styles = {
    center: {
      textAlign: "center",
      margin: "2rem",
    },
    widths: {
      width: "100%",
    },
    logo: {
      width: "15rem",
      margin: "3rem",
    },
  };

  return (
    <Router>
      <Route exact path="/">
        <div>
          <img
            src={Logo}
            alt="sizzle logo"
            className="logo"
            style={styles.logo}
          />
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <form
              className="justify-content-center inputform login"
              onSubmit={handleSubmit}
            >
              <h2 style={styles.center}>Log In</h2>
              {/* <p style={styles.center}>
                Create account? <Link to="/register">Register</Link>
              </p> */}
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Username</label>
                <input
                  type="email"
                  className="form-control"
                  id="email-input"
                  placeholder="Enter your email"
                  ref={emailRef}
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password-input"
                  placeholder="Enter your password"
                  ref={passwordRef}
                />
              </div>
              <div className="justify-content-center">
                <button
                  type="submit"
                  className="btn btn-warning "
                  style={styles.widths}
                >
                  LOG IN
                </button>
              </div>
              <small className="subtle-text">
                Create account? <Link to="/register">Register</Link>
              </small>
            </form>
          </div>
        </div>
        {/* <p>Please enter your information to login:</p>
            <form onSubmit={handleSubmit}>
            <input type="text" placeholder="email" ref={emailRef} />
            <input type="text" placeholder="password" ref={passwordRef} />
            <button type="submit">Submit</button>
            </form>
            <p>
            If you don't have an account create one <Link to="/register">here</Link>.
            </p> */}
      </Route>
      <Route exact path="/register">
        <Register />
      </Route>
    </Router>
  );
};

export default Login;
