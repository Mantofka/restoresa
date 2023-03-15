import { combineReducers } from "redux";

import User from "../reducers/user/user.reducer";

const rootReducer = combineReducers({
  user: User,
});

export default rootReducer;
