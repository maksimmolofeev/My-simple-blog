import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { userActions } from 'entities/User'
import { User } from 'entities/User/model/types/user'
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage'

interface loginByUsernameProps {
    username: string
    password: string
}

export const loginByUsername = createAsyncThunk<User, loginByUsernameProps, {rejectValue: string}>(
    'login/loginByUsername',
    async (authData, thunkAPI) => {
        try {
            const response = await axios.post<User>('http://localhost:8000/login', authData)

            if (!response.data) {
                throw new Error
            }

            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data))
            thunkAPI.dispatch(userActions.setAuthData(response.data))

            return response.data
        } catch (error) {
            console.log(error)
            return thunkAPI.rejectWithValue(error)
        }
    }
)

