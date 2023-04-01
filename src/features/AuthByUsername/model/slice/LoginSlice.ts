import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { LoginSchema } from '../types/LoginSchema'
import { loginByUsername } from '../services/loginByUsername/loginByUsername'

const initialState: LoginSchema = {
    username: '',
    password: '',
    isLoading: false,
    error: ''
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload
        },
        clearError: (state) => {
            state.error = ''
        }
    },
    extraReducers: (builder) => {
        builder.addCase(loginByUsername.pending, (state, action) => {
            state.error = ''
            state.isLoading = true
        })
        builder.addCase(loginByUsername.fulfilled, (state, action) => {
            state.isLoading = false
        })
        builder.addCase(loginByUsername.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload
        })
    },
})

export const { actions: loginActions } = loginSlice
export const { reducer: loginReducer } = loginSlice