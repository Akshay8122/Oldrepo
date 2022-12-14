import cakeReducer from "./cake/cakeReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
const store = createStore(
  cakeReducer,
  composeWithDevTools(applyMiddleware(logger))
);

export default store;	
