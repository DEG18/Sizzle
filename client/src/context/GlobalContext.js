import React, { useReducer, createContext, useContext} from "react";
import {
  LOGIN,
  LOGOUT,
  GET_REST,
  GET_WELCOME
} from "./actions";

// create the context
const GlobalContext = createContext();
// get the provider from the new context
const { Provider } = GlobalContext;

const reducer = (state, action) => {
  switch (action.type) {
    case GET_REST:
      return {
        ...state,
        restaurants: action.restaurants
      }
    case LOGOUT: 
      return {
        ...state,
        user: {}
      }
    case LOGIN:
      return {
        ...state,
        user: action.user
      };
    case GET_WELCOME:
      return {
        ...state,
        welcomeMessage: action.welcomeMessage
      }
    default:
      return state;
  }
}

const GlobalProvider = ({value=[], ...props}) => {
  const [state, dispatch] = useReducer(reducer, {
    user: {},
    welcomeMessage: "",
    restaurants:[]
  })
  return <Provider value={[state,dispatch]} {...props} />
}

const useGlobalContext = () => {
  return useContext(GlobalContext);
} 

export {
  useGlobalContext, 
  GlobalProvider
}