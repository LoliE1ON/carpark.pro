import { applyMiddleware, createStore } from "redux";
import { reducers } from "./reducers";
import thunk from "redux-thunk";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { sagaWatcher } from "./sagaWatcher";

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(reducers, applyMiddleware(thunk, sagaMiddleware, logger));
sagaMiddleware.run(sagaWatcher);
