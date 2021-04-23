import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import pokemon from "./pokemon";

const rootReducer = (history) =>
  combineReducers({
    pokemon,
    router: connectRouter(history),
  });

export default rootReducer;
