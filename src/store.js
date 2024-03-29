import { applyMiddleware, createStore } from "redux"
import logger from "redux-logger"
import rootReducer from "./reducers/rootReducer";

export default createStore(rootReducer, applyMiddleware(logger))