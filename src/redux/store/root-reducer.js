import { combineReducers } from "redux";

import User from "../reducers/user/user.reducer";
import UIReducer from "../reducers/ui/ui.reducer";
import ReservationReducer from "../reducers/reservation/reservation.reducer";
import RestaurantsReducer from "../reducers/restaurants/restaurants.reducer";

import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  user: User,
  ui: UIReducer,
  reservation: ReservationReducer,
  restaurants: RestaurantsReducer,
});

export default persistReducer(persistConfig, rootReducer);
