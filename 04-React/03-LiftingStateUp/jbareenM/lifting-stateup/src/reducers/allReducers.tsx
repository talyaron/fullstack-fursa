import { combineReducers } from "redux";
import counterReducer from "./counter";
import loggedReducer from "./isLogged";

interface compined{
    counterReducer: number;
    loggedReducer: boolean;
}

const allReducers:any = combineReducers({
    counterReducer: counterReducer,
    loggedReducer: loggedReducer
})

export default allReducers;