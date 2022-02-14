import { combineReducers } from "redux";
import counterReducer from "./counter";
import loggedReducer from "./isLogged";

const allReducers = combineReducers({
    counterReducer: counterReducer,
    loggedReducer: loggedReducer
})

export default allReducers;