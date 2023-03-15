import {
  USER_REGISTER,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_LOGIN,
  USER_LOGIN_FAIL,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_WITH_GOOGLE,
} from "./user.types";

export const loginUserWithGoogle = () => {
  return {
    type: USER_LOGIN_WITH_GOOGLE,
  };
};

export const loginUser = (credentials) => {
  return {
    type: USER_LOGIN,
    payload: credentials,
  };
};

export const loginUserFail = (error) => {
  return {
    type: USER_LOGIN_FAIL,
    payload: error,
  };
};

export const loginUserSuccess = (user) => {
  console.log(user);
  return {
    type: USER_LOGIN_SUCCESS,
    payload: user,
  };
};

export const registerUser = (credentials) => {
  return {
    type: USER_REGISTER,
    payload: credentials,
  };
};

export const registerUserFail = (error) => {
  return {
    type: USER_REGISTER_FAIL,
    payload: error,
  };
};

export const registerUserSuccess = (user) => {
  return {
    type: USER_REGISTER_SUCCESS,
    payload: user,
  };
};
