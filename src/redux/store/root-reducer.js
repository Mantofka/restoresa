import { combineReducers } from "redux";

import User from "../reducers/user/user.reducer";
import UIReducer from "../reducers/ui/ui.reducer";
import ReservationReducer from "../reducers/reservation/reservation.reducer";
import RestaurantsReducer from "../reducers/restaurants/restaurants.reducer";
import PaymentReducer from "../reducers/payment/payment.reducer";

import { getPersistConfig } from "redux-deep-persist";

import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const rootReducer = combineReducers({
  user: User,
  ui: UIReducer,
  reservation: ReservationReducer,
  restaurants: RestaurantsReducer,
  payment: PaymentReducer,
});

const persistConfig = getPersistConfig({
  key: "root",
  storage,
  whitelist: ["reservation", "user"],
  rootReducer,
});

export default persistReducer(persistConfig, rootReducer);
