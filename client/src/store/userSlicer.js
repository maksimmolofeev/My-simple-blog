import { createSlice } from "@reduxjs/toolkit";

export const { reducer: userReducer, actions: userAction } = createSlice({
    name: 'User',
    initialState: {
        _isAuth: false,
        _user: {}
    },
    reducers: {
        inputAccount: (state, data) => {
            state._isAuth = data.payload
        }, 

        setUser: (state, data) => {
            state._user = data.payload
        },

        setAuth: (state, data) => {
            state._isAuth = data.payload
        }
    }
});

export const { inputAccount, setUser, setAuth } = userAction;