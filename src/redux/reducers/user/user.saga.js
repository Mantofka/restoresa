import { takeLatest, put, call } from "redux-saga/effects";

import {
  loginToFirebase,
  registerToFirebase,
  loginWithGoogleProvider,
  changeUserPassword,
} from "../../../utils/firebase/user";

import {
  USER_REGISTER,
  USER_LOGIN,
  USER_LOGIN_WITH_GOOGLE,
  SET_CHANGE_PASSWORD,
} from "./user.types";

import {
  loginUserFail,
  loginUserSuccess,
  registerUserFail,
  registerUserSuccess,
  setChangePasswordFail,
  setChangePasswordSuccess,
} from "./user.actions";

function* onUserChangePasword({ payload }) {
  try {
    yield call(changeUserPassword, payload);
    yield put(setChangePasswordSuccess("Successfully changed!"));
  } catch ({ message }) {
    yield put(setChangePasswordFail(message));
  }
}

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
  yield takeLatest(SET_CHANGE_PASSWORD, onUserChangePasword);
}

export default UserSaga;
