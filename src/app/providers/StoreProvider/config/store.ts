import { configureStore, ReducersMapObject } from '@reduxjs/toolkit'
import { counterReducer } from 'entities/Counter'
import { userReducer } from 'entities/User'
import { StateSchema } from './StateSchema'
import { loginReducer } from 'features/AuthByUsername/model/slice/LoginSlice'

const rootReducers: ReducersMapObject = {
    counter: counterReducer,
    user: userReducer,
    loginForm: loginReducer
}

export function createReduxStore (initialState?: StateSchema) {
    return configureStore<StateSchema>({
        reducer: rootReducers,
        devTools: __IS_DEV__,
        preloadedState: initialState
    })
}
