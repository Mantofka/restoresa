import { combineReducers } from "redux";

import User from "../reducers/user/user.reducer";
import UIReducer from "../reducers/ui/ui.reducer";
import ReservationReducer from "../reducers/reservation/reservation.reducer";

const rootReducer = combineReducers({
  user: User,
  ui: UIReducer,
  reservation: ReservationReducer,
});

export default rootReducer;
