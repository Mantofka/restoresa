import { takeLatest, put, call } from "redux-saga/effects";

import {
  loginToFirebase,
  registerToFirebase,
  loginWithGoogleProvider,
} from "../../../utils/firebase/user";

import {
  USER_REGISTER,
  USER_LOGIN,
  USER_LOGIN_WITH_GOOGLE,
} from "./user.types";

import {
  loginUserFail,
  loginUserSuccess,
  registerUserFail,
  registerUserSuccess,
} from "./user.actions";

function* onUserLogin({ payload }) {
  try {
    const response = yield call(loginToFirebase, payload);
    yield put(loginUserSuccess(response));
  } catch ({ message }) {
    yield put(loginUserFail(message));
  }
}

function* onUserLoginWithGoogle() {
  try {
    const response = yield call(loginWithGoogleProvider);
    yield put(loginUserSuccess(response));
  } catch ({ message }) {
    yield put(loginUserFail(message));
  }
}

function* onUserRegister({ payload }) {
  try {
    const response = yield call(registerToFirebase, payload);
    yield put(registerUserSuccess(response));
  } catch ({ message }) {
    yield put(registerUserFail(message));
  }
}

function* UserSaga() {
  yield takeLatest(USER_LOGIN, onUserLogin);
  yield takeLatest(USER_REGISTER, onUserRegister);
  yield takeLatest(USER_LOGIN_WITH_GOOGLE, onUserLoginWithGoogle);
}

export default UserSaga;
