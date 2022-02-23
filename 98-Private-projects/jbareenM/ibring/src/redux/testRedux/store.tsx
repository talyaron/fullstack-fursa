import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducers from "./compinedReducer";

const store = createStore(rootReducers, composeWithDevTools(
    applyMiddleware(thunk)
));

export default store;