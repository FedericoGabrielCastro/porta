import { createStore, applyMiddleware, combineReducers } from 'redux'
import logger from 'redux-logger' 
import { composeWithDevTools } from 'redux-devtools-extension'

import { themeModeReducer } from './reducers/themeModeReducer'

const rootReducer = combineReducers ({
    themeModeReducer: themeModeReducer, // change to dark mode or light mode theme
})

export const store = createStore (
    rootReducer,
    composeWithDevTools(applyMiddleware(logger))
)