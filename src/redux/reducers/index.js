import {combineReducers} from 'redux'
import {reducer, singleProductReducer} from './reducer'

export const rootReducer = combineReducers({
    reducer,
    singleProductReducer
})