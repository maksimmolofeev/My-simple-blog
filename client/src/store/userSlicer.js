import { createSlice } from "@reduxjs/toolkit";

export const { reducer: userReducer, actions: userAction } = createSlice({
    name: 'User',
    initialState: {
        _isAuth: true,
        _user: {}
    },
    reducers: {
        inputAccount: (state, data) => {
            state._isAuth = data.payload
        }
    }
});

export const { inputAccount } = userAction;