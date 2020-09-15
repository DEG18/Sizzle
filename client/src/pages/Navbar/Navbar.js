import React from "react";
import { useGlobalContext } from "../../context/GlobalContext";
import { LOGOUT } from "../../context/actions";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomeIcon from "../Navicons/homeicon";
import CollectionIcon from "../Navicons/collectionicon";
import HomePage from "../Home/home";
import CollectionPage from "../Collections/collections";
import "./navbar.css";

const Navbar = () => {
  const [state, dispatch] = useGlobalContext();
  const handleLogout = () => {
    // remove the user from localStorage
    localStorage.removeItem("authUser");
    // remove the user from the state
    dispatch({
      type: LOGOUT,
    });
  };

  return (
    <div className="container-fluid">
      <nav className="right navbar navbar-expand-lg text-light">
        <div className="sizzle">Sizzle</div>
        <button
          className="sidenav navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="sidenav right collapse navbar-collapse"
          id="navbarSupportedContent"
        >
          <form
            className="form-inline my-2 my-lg-0 collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <div className="btn home btn-outline-warning text-light my-2 my-sm-0">
              <HomeIcon />
            </div>
            <div className="btn btn-outline-warning text-light my-2 my-sm-0">
              <CollectionIcon />
            </div>
            <div
              className="btn btn-outline-warning text-light my-2 my-sm-0"
              onClick={handleLogout}
            >
              Logout
            </div>
          </form>
        </div>
      </nav>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/collection">
          <CollectionPage />
        </Route>
      </Switch>
    </div>
  );
};

export default Navbar;
