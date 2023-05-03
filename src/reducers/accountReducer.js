import {createSlice} from "@reduxjs/toolkit";

const initialState =
    {
        balance: 0,
        quote: 'Future is Coming!!!'
    }

const accountSlice = createSlice({
    name: 'account',
    initialState,
    reducers:
        {
            depositAction: (state, action) =>
            {
                state.balance = state.balance + action.payload;
            },
            withdrawAction: (state, action) =>
            {
                let res = state.balance - action.payload;
                if (res < 0)
                    state.balance = 0;
                else state.balance = res;
            },
            quoteRequestAction: state =>
            {
                state.quote = 'Loading...'
            },
            putQuoteAction: (state, action) =>
            {
                state.quote = action.payload
            },
            errorRequestAction: (state, action) =>
            {
                state.quote = action.payload
            }
        }
});

export const {actions, reducer} = accountSlice;
export const {depositAction, withdrawAction, quoteRequestAction, putQuoteAction, errorRequestAction} = actions;
export const accountReducer = reducer;

export const getQuoteAction = () =>
{
    return (dispatch) =>
    {
        dispatch(quoteRequestAction());
        fetch('https://api.kanye.rest/')
            .then(response => response.json())
            .then(data => dispatch(putQuoteAction(data.quote)))
            .catch(e => dispatch(errorRequestAction(e.message)));
    }
}