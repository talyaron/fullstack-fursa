import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';

import rootReducers from "./compinedReducer";

const userInfoFromLocalStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')!) : undefined;
const listInfoFromLocalStorage = localStorage.getItem('listInfo') ? JSON.parse(localStorage.getItem('listInfo')!) : undefined;

const initialState = {
    user: { userInfo: userInfoFromLocalStorage },
    list: {listInfo: listInfoFromLocalStorage }
} as {}

console.log({ initialState: initialState })

const store = createStore(rootReducers, initialState, composeWithDevTools(
    applyMiddleware(thunk)
));

export default store;

export type RootState = ReturnType<typeof store.getState>