import C from '../constants'
import appReducer from './reducers'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'

const logger = createLogger()

export default (initialState={}) => {
    return applyMiddleware(thunk, logger)(createStore)(appReducer, initialState)
}
