import { takeLatest, put, call } from "redux-saga/effects";

import { ON_RESTAURANTS_FETCH } from "./restaurants.types";

import { fetchRestaurants } from "../../../utils/firebase/restaurants";

import {
  onRestaurantsFetchFail,
  onRestaurantsFetchSuccess,
} from "./restaurants.actions";

function* onFetchRestaurants() {
  try {
    const response = yield call(fetchRestaurants);
    yield put(onRestaurantsFetchSuccess(response));
  } catch ({ message }) {
    yield put(onRestaurantsFetchFail(message));
  }
}

function* RestaurantsSaga() {
  yield takeLatest(ON_RESTAURANTS_FETCH, onFetchRestaurants);
}

export default RestaurantsSaga;
