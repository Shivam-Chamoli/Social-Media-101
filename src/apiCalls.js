import axios from "axios";

function saveUserToLocalStorage(user) {
  console.log(user);
  // check if user already exists or not ......... not implemented
  localStorage.setItem("samWadUser", JSON.stringify(user));
}

export const loginCall = async (userCredentials, dispatch) => {
  dispatch({ type: "LOGIN_START" });
  try {
    const res = await axios.post("auths/login", userCredentials);
    console.log(res);
    saveUserToLocalStorage(res.data);
    dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
  } catch (err) {
    dispatch({ type: "LOGIN_SUCCESS", payload: err });
  }
};
