import C from '../constants'
import appReducer from './reducers'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'

export default (initialState={}) => {
    return applyMiddleware(thunk, logger)(createStore)(appReducer, initialState)
}
