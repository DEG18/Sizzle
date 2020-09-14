import React from "react"
import { useGlobalContext } from "../../context/GlobalContext";
import { LOGOUT } from "../../context/actions";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HomeIcon  from "../Navicons/homeicon"
import CollectionIcon from "../Navicons/collectionicon"
import HomePage from "../Home/home"
import CollectionPage from "../Collections/collections"


const Navbar = () => {
    const [state, dispatch] = useGlobalContext();
    const handleLogout = () => {
        // remove the user from localStorage
        localStorage.removeItem('authUser');  
        // remove the user from the state
        dispatch({
        type: LOGOUT
        });
    }

    return (
        <div>
            <HomeIcon/>
            <CollectionIcon />
            <button onClick={handleLogout}>Logout</button>
            <Switch>
                <Route exact path="/">
                    <HomePage/>
                </Route>
                <Route exact path="/collection">
                    <CollectionPage/>
                </Route>
            </Switch>
        </div>
    )
}

export default Navbar;