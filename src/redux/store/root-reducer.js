import { combineReducers } from "redux";

import UserReducer from "../reducers/user/user.reducer";

const rootReducer = combineReducers({
  UserReducer,
});

export default rootReducer;
