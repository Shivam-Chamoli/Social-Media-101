import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const currUser = () => {
  if (localStorage.getItem("samWadUser") === null) {
    return null;
  } else {
    return JSON.parse(localStorage.getItem("samWadUser"));
  }
};
const INITIAL_STATE = {
  user: currUser(),
  isFetching: false, //decides the begining and ending of the process
  error: false,
};

export const AuthContext = createContext(INITIAL_STATE);
//making a wrapper which can wrap any children like app,js or profile.js
export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
