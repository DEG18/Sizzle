import React, {useEffect} from "react";
import { useGlobalContext } from "../context/GlobalContext";
import {
  LOGOUT, GET_WELCOME
} from "../context/actions";
import Home from "../pages/Home/home"
import Navbar from "../pages/Navbar/Navbar"
import axios from "axios";
import { BrowserRouter as Router} from "react-router-dom";


const AuthenticatedApp = () => {
  const [state, dispatch] = useGlobalContext();

  const getWelcome = async() => {
    const { data } = await axios.get("/api/home", {
      headers: {
        Authorization: `Bearer ${state.user.token}`
      }
    });
    
    console.log(data)
    dispatch({
      type: GET_WELCOME,
      welcomeMessage: data
    });
  }
  // const getHome = async () => {
  //   const
  // }


  useEffect(()=>{
    getWelcome();
  }, [])



  return (
    <div>
      <Router>
        <Navbar/>
      </Router>
    </div>
  )
}

export default AuthenticatedApp;