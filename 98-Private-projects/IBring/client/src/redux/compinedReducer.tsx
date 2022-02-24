import { combineReducers } from "redux";
import userReducer from './reducers/userReducer'
import { userLoginReducer } from "./reducers/userReducer";
import { ListReducer } from './reducers/listReducer';

const rootReducers = combineReducers({
    // user: userReducer
    user: userLoginReducer,
    list: ListReducer
})

export default rootReducers;