import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { useGlobalContext } from "../context/GlobalContext";
import axios from "axios";
import { LOGIN } from "../context/actions";
import Logo from "../assets/sizzle.jpg";

const Register = () => {
  const [state, dispatch] = useGlobalContext();
  const history = useHistory();

  const regEmailRef = useRef();
  const regPasswordRef = useRef();

  const doSignup = async () => {
    const { data } = await axios.post("/auth/register", {
      email: regEmailRef.current.value,
      password: regPasswordRef.current.value,
    });

    console.log(data);
    // save the authenticated user data in local storage
    localStorage.setItem("authUser", JSON.stringify(data));
    dispatch({
      type: LOGIN,
      user: data,
    });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    doSignup();
    history.push("/");
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
    <div className="container">
      <div>
        <img
          src={Logo}
          alt="sizzle logo"
          className="logo"
          style={styles.logo}
        />
      </div>
      <div className="row justify-content-center">
        <form
          className="justify-content-center inputform login"
          onSubmit={handleSignup}
        >
          <h2 style={styles.center}>Register</h2>
          {/* <p style={styles.center}>
            Already on Sizzle? <Link to="/">Log In</Link>
          </p> */}
          <div className="form-group">
            <label for="exampleInputEmail1">Username</label>
            <input
              type="email"
              className="form-control"
              id="email-input"
              placeholder="Enter your email"
              ref={regEmailRef}
              required
            />
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="password-input"
              placeholder="Enter your password"
              ref={regPasswordRef}
              required
            />
          </div>
          <div className="justify-content-center">
            <button
              type="submit"
              className="btn btn-warning "
              style={styles.widths}
            >
              REGISTER
            </button>
          </div>
          <small className="subtle-text">
            Already on Sizzle? <Link to="/">Log In</Link>
          </small>
        </form>
      </div>
    </div>
  );
};

export default Register;
