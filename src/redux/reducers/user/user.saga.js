import { takeLatest, put, call } from "redux-saga/effects";

import {
  USER_REGISTER,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_LOGIN,
  USER_LOGIN_FAIL,
  USER_LOGIN_SUCCESS,
} from "./user.types";

import { loginUser, loginUserFail, loginUserSuccess } from "./user.actions";

function* onUserLogin(credentials) {
  try {
    const response = yield put(loginUser(credentials));
    yield put(loginUserSuccess(response));
  } catch (error) {
    yield put(loginUserFail(error));
  }
}

function* UserSaga(){
    yield takeLatest(USER_LOGIN, onUserLogin);
}

export default UserSaga;