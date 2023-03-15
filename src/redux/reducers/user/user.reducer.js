import {
  USER_REGISTER,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_LOGIN,
  USER_LOGIN_FAIL,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_WITH_GOOGLE,
} from "./user.types";

const initialState = {
  user: {
    pending: false,
    data: null,
    isAuthenticated: false,
  },
  errorModal: null,
};

const User = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_WITH_GOOGLE:
    case USER_REGISTER:
    case USER_LOGIN:
      return {
        ...state,
        user: {
          pending: true,
          data: null,
          isAuthenticated: false,
        },
      };
    case USER_REGISTER_FAIL:
    case USER_LOGIN_FAIL:
      return {
        ...state,
        user: {
          ...state.user,
          pending: false,
          isAuthenticated: false,
        },
        errorModal: action.payload,
      };
    case USER_REGISTER_SUCCESS:
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        errorModal: null,
        user: {
          pending: false,
          data: action.payload,
          isAuthenticated: true,
        },
      };
    default:
      return { ...state };
  }
};

export default User;
