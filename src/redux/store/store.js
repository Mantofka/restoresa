import createSagaMiddleware from "redux-saga";
import { applyMiddleware, createStore, compose } from "redux";
import logger from "redux-logger";

import rootReducer from "./root-reducer";
import rootSaga from "./root-sagas";

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [sagaMiddleware, logger];

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);
sagaMiddleware.run(rootSaga);

export default store;
