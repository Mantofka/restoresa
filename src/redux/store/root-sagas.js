import { all, fork } from "redux-saga/effects";

import UserSaga from "../reducers/user/user.saga";
import RestaurantsSaga from "../reducers/restaurants/restaurants.saga";

export default function* rootSaga() {
  yield all([fork(UserSaga), fork(RestaurantsSaga)]);
}
