import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';

import rootReducers from "./compinedReducer";

const userInfoFromLocalStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')!) : undefined;

const initialUserState = {
    user: { userInfo: userInfoFromLocalStorage }
} as {}

console.log({ initialUserState: initialUserState })

const store = createStore(rootReducers, initialUserState, composeWithDevTools(
    applyMiddleware(thunk)
));

export default store;

export type RootState = ReturnType<typeof store.getState>