import React, { useState , useEffect , useRef} from "react";
import "./home.css";
import Logo from "../../assets/sizzle.jpg";
import { NavLink } from "react-router-dom";
import API from "../../utils/API";
import Restaurants from "../Restaurants/restaurants"
// import { get } from "mongoose";
// import { GET_WELCOME } from "../../context/actions";
import { useGlobalContext } from "../../context/GlobalContext";
// import axios from "axios";
import { GET_REST } from "../../context/actions";


const Home = () => {

  const [state, dispatch] = useGlobalContext();

  const [term, setTerm] = useState("sweet");
  const [location, setLocation] = useState("New York");
  let yelpdata;
  // const getRest = async() => {
  //   const { data } = await API.getRest(term,location);
  //   yelpdata = data;
  //   console.log(data)
  //   console.log(yelpdata[0].name);
  // }

  useEffect(()=>{
    // getRest();
   API.getRest(term, location)
      .then((res) => {
        dispatch({
          type: GET_REST,
          restaurants: res.data
      })
    });
  }, [])
  console.log(state.restaurants);
  const termRef = useRef();
  const locationRef = useRef();
  const restaurantRef = useRef();

  const handleFormSubmit = event => {
    event.preventDefault();
    // getRest();
  };


  return (
    <div>
      <div>
        <img src={Logo} alt="sizzle logo" className="logo" />
      </div>
      <form
        className="search-form"
        onSubmit={(e) => handleFormSubmit(e)}
      >
        <input
          type="text"
          name="term"
          className="search"
          placeholder="Enter a flavor..."
          ref={termRef}
        />
        <input
          type="text"
          name="location"
          className="search"
          placeholder="Enter a Name of State"
          ref={locationRef}
        />
        <button
          type="submit"
          className="search-button"
          disabled={!term.trim() && !location.trim()}
        >
          <svg height="32" width="32">
            <path
              d="M19.427 21.427a8.5 8.5 0 1 1 2-2l5.585 5.585c.55.55.546 1.43 0 1.976l-.024.024a1.399 1.399 0 0 1-1.976 0l-5.585-5.585zM14.5 21a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13z"
              fill="#ffffff"
              fillRule="evenodd"
            />
          </svg>
        </button>
      </form>
      <div className="main-nav">
        <button type="submit" className="btn sweet">
          <NavLink to="/sweet">Sweet</NavLink>
        </button>
        <button type="submit" className="btn salty">
          <NavLink to="/salty">Salty</NavLink>
        </button>
        <button type="submit" className="btn savory">
          <NavLink to="/savory">Savory</NavLink>
        </button>
        <button type="submit" className="btn sour">
          <NavLink to="/sour">Sour</NavLink>
        </button>
      </div>
      <Restaurants data={state.restaurants} />
      {console.log(state.restaurants)}
    </div>
  );
};

export default Home;



