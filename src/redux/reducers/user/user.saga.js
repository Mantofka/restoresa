import { takeLatest, put, call } from "redux-saga/effects";

import {
  loginToFirebase,
  registerToFirebase,
  loginWithGoogleProvider,
  changeUserPassword,
  changeUserPhoneNumber,
} from "../../../utils/firebase/user";

import {
  USER_REGISTER,
  USER_LOGIN,
  USER_LOGIN_WITH_GOOGLE,
  SET_CHANGE_PASSWORD,
  SET_CHANGE_PHONE_NUMBER,
} from "./user.types";

import {
  loginUserFail,
  loginUserSuccess,
  registerUserFail,
  registerUserSuccess,
  setChangePasswordFail,
  setChangePasswordSuccess,
  setChangePhoneNumberSuccess,
  setChangePhoneNumberFail,
} from "./user.actions";

function* onUserChangePhoneNumber({ payload }) {
  try {
    yield call(changeUserPhoneNumber, payload);
    yield put(setChangePhoneNumberSuccess("Successfully changed!"));
  } catch ({ message }) {
    yield put(setChangePhoneNumberFail(message));
  }
}

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
  yield takeLatest(SET_CHANGE_PHONE_NUMBER, onUserChangePhoneNumber);
}

export default UserSaga;
