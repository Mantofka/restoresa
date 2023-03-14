import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { applyMiddleware } from "redux";

import { userReducer } from "../reducers/user/user.reducer";

import rootReducer from "./root-reducer";

const store = configureStore({
  rootReducer,
});

export default store;
