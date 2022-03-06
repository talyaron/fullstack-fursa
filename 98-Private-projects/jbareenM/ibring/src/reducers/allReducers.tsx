import { combineReducers } from "redux";
import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import listFormReducer from "./listFormReducer";

const allReducers = combineReducers({
    listFormReducer: listFormReducer,
    loggedReducer: loggedReducer,
    counterReducer: counterReducer
})

export default allReducers;