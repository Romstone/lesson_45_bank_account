/*import accountReducer from "../reducers/accountReducer";
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import {logger} from "redux-logger/src";

const initialState =
    {
        balance: 0,
        quote: 'Future is Coming'
    };

const store = createStore(accountReducer, initialState,
    applyMiddleware(thunk, logger));

export default store;*/

import {configureStore} from "@reduxjs/toolkit";
import {accountReducer} from "../reducers/accountReducer";

export const store = configureStore({
    reducer:
        {
            account: accountReducer
        }
});
