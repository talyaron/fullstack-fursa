import { combineReducers } from "redux";
import userReducer from './reducers/userReducer'
import { userLoginReducer } from "./reducers/userReducer";

const rootReducers = combineReducers({
    // user: userReducer
    user: userLoginReducer
})

export default rootReducers;