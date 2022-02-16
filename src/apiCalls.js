import axios from "axios";
// import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

function saveUserToLocalStorage(user) {
  console.log(user);
  // check if user already exists or not ......... not implemented
  localStorage.setItem("samWadUser", JSON.stringify(user));
}
function removeUserFromLocalStorage() {
  // removing user
  localStorage.removeItem("samWadUser");
}

export const loginCall = async (userCredentials, dispatch) => {
  dispatch({ type: "LOGIN_START" });
  try {
    const res = await axios.post("auths/login", userCredentials);
    console.log(res);
    // if (res.status !== 200) {
    //   dispatch({ type: "LOGIN_FAILURE", payload: "wrong user" });
    // }
    saveUserToLocalStorage(res.data);
    dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
  } catch (err) {
    dispatch({ type: "LOGIN_FAILURE", payload: err });
  }
};

export const removeUser = async () => {
  removeUserFromLocalStorage();
  return true;
};
