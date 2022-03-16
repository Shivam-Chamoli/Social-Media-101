export const LoginStart = (userCredentials) => ({
  type: "LOGIN_START",
});

export const LoginSuccess = (user) => ({
  type: "LOGIN_SUCESSS",
  payload: user,
});

export const LoginFailure = (error) => ({
  type: "LOGIN_FAILURE",
  payload: error,
});
export const LogOutError = () => ({
  type: "LOGOUT",
});

export const LogOutError = (error) => ({
  type: "LOGOUT_FAILURE",
  payload: error,
});
