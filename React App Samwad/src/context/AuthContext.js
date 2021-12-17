import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
  user: {
    profilePicture: "",
    coverPicture: "",
    followers: ["60d10774552e1756541c438d"],
    following: ["60d10774552e1756541c438d"],
    isAdmin: false,
    _id: "60d10799552e1756541c438e",
    username: "Arjun",
    email: "Arjun@wannaBeBest.com",
    password: "$2b$10$ykHkWi3lBF1xW9mQ0Uc6n.TSINGPcQpT1saMZfOtsP1V4g1IDXAS.",
    createdAt: "2021-06-21T21:41:45.098Z",
    updatedAt: "2021-08-13T03:06:17.413Z",
    __v: 0,
  },
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
