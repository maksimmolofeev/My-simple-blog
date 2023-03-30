import { configureStore, ReducersMapObject } from '@reduxjs/toolkit'
import { counterReducer } from 'entities/Counter'
import { userReducer } from 'entities/User'
import { StateSchema } from './StateSchema'

const rootReducers: ReducersMapObject = {
    counter: counterReducer,
    user: userReducer
}

export function createReduxStore (initialState?: StateSchema) {
    return configureStore<StateSchema>({
        reducer: rootReducers,
        devTools: __IS_DEV__,
        preloadedState: initialState
    })
}
