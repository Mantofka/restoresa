import {
  USER_REGISTER,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_LOGIN,
  USER_LOGIN_FAIL,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_WITH_GOOGLE,
  SET_CHANGE_PASSWORD,
  SET_CHANGE_PASSWORD_SUCCESS,
  SET_CHANGE_PASSWORD_FAIL,
  SET_CHANGE_PHONE_NUMBER,
  SET_CHANGE_PHONE_NUMBER_SUCCESS,
  SET_CHANGE_PHONE_NUMBER_FAIL,
  CLEAR_PHONE_NUMBER,
  CLEAR_PASSWORD,
  SET_NEXT_ROUTE,
  CLEAR_NEXT_ROUTE,
} from "./user.types";

const initialState = {
  user: {
    pending: false,
    data: null,
    isAuthenticated: false,
  },
  changePassword: {
    message: undefined,
    isSuccess: undefined,
    isPending: false,
  },
  changePhoneNumber: {
    message: undefined,
    isSuccess: undefined,
    isPending: false,
  },
  nextRoute: undefined,
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
    case SET_CHANGE_PASSWORD:
      return {
        ...state,
        changePassword: {
          message: undefined,
          isSuccess: undefined,
          isPending: true,
        },
      };
    case SET_CHANGE_PASSWORD_SUCCESS:
      return {
        ...state,
        changePassword: {
          message: action.payload,
          isSuccess: true,
          isPending: false,
        },
      };
    case SET_CHANGE_PASSWORD_FAIL:
      return {
        ...state,
        changePassword: {
          message: action.payload,
          isSuccess: false,
          isPending: false,
        },
      };
    case SET_CHANGE_PHONE_NUMBER:
      return {
        ...state,
        changePhoneNumber: {
          message: undefined,
          isSuccess: undefined,
          isPending: true,
        },
      };
    case CLEAR_PASSWORD:
      return {
        ...state,
        changePassword: {
          message: undefined,
          isSuccess: undefined,
          isPending: false,
        },
      };
    case SET_CHANGE_PHONE_NUMBER_SUCCESS:
      return {
        ...state,
        changePhoneNumber: {
          message: action.payload,
          isSuccess: true,
          isPending: false,
        },
      };
    case SET_CHANGE_PHONE_NUMBER_FAIL:
      return {
        ...state,
        changePhoneNumber: {
          message: action.payload,
          isSuccess: false,
          isPending: false,
        },
      };
    case CLEAR_PHONE_NUMBER:
      return {
        ...state,
        changePhoneNumber: {
          message: undefined,
          isSuccess: undefined,
          isPending: false,
        },
      };
    case CLEAR_NEXT_ROUTE:
      return {
        ...state,
        nextRoute: undefined,
      };
    case SET_NEXT_ROUTE:
      return {
        ...state,
        nextRoute: action.payload,
      };
    default:
      return { ...state };
  }
};

export default User;
