import {
  USER_REGISTER,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_LOGIN,
  USER_LOGIN_FAIL,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_WITH_GOOGLE,
  SET_CHANGE_PASSWORD_FAIL,
  SET_CHANGE_PASSWORD,
  SET_CHANGE_PASSWORD_SUCCESS,
  SET_CHANGE_PHONE_NUMBER,
  SET_CHANGE_PHONE_NUMBER_FAIL,
  SET_CHANGE_PHONE_NUMBER_SUCCESS,
  CLEAR_PHONE_NUMBER,
  CLEAR_PASSWORD,
  CLEAR_NEXT_ROUTE,
  SET_NEXT_ROUTE,
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

export const setChangePassword = (passwords) => {
  return {
    type: SET_CHANGE_PASSWORD,
    payload: passwords,
  };
};

export const setChangePasswordFail = (message) => {
  return {
    type: SET_CHANGE_PASSWORD_FAIL,
    payload: message,
  };
};

export const setChangePasswordSuccess = (message) => {
  return {
    type: SET_CHANGE_PASSWORD_SUCCESS,
    payload: message,
  };
};

export const setChangePhoneNumber = (phoneNumber) => {
  return {
    type: SET_CHANGE_PHONE_NUMBER,
    payload: phoneNumber,
  };
};

export const setChangePhoneNumberFail = (message) => {
  return {
    type: SET_CHANGE_PHONE_NUMBER_FAIL,
    payload: message,
  };
};

export const setChangePhoneNumberSuccess = (message) => {
  return {
    type: SET_CHANGE_PHONE_NUMBER_SUCCESS,
    payload: message,
  };
};

export const clearPhoneNumber = () => {
  return {
    type: CLEAR_PHONE_NUMBER,
  };
};

export const clearPassword = () => {
  return {
    type: CLEAR_PASSWORD,
  };
};

export const setNextRoute = (route) => {
  return {
    type: SET_NEXT_ROUTE,
    payload: route,
  };
};

export const clearNextRoute = () => {
  return {
    type: CLEAR_NEXT_ROUTE,
  };
};
