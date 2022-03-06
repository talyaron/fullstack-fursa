import { combineReducers } from "redux";
import cakeReducer from "./Cake/CakeReducer";
import iceCreamReducer from "./iceCream/iceCreamReducer";
import userReducer from "./Users/UserReducer";

const rootReducers = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    user: userReducer
})

export default rootReducers;