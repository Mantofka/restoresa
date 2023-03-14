import {
  USER_REGISTER,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_LOGIN,
  USER_LOGIN_FAIL,
  USER_LOGIN_SUCCESS,
} from "./user.types";

const initialState = {
  user: {
    pending: false,
    data: null,
  },
  errorModal: null,
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      state = {
        ...state,
        user: {
          pending: true,
          data: null,
        },
      };
      break;
    case USER_LOGIN_FAIL:
      state = {
        ...state,
        user: {
          ...state.user,
          pending: false,
        },
        errorModal: action.payload,
      };
      break;
    case USER_LOGIN_SUCCESS:
      state = {
        ...state,
        errorModal: null,
        user: {
          pending: false,
          data: action.payload,
        },
      };
      break;
    default:
      state = { ...state };
      break;
  }
};

export default UserReducer;
