import appReducer from './reducers'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { routerMiddleware } from 'react-router-redux'
import history from '../history'

const logger = createLogger()
const historyMiddleware = routerMiddleware(history)

const store = createStore(appReducer, composeWithDevTools(
    applyMiddleware(thunk, historyMiddleware, logger)
))

export default store

// export default (initialState={}) => {
//     return applyMiddleware(thunk, logger)(createStore)(appReducer, initialState)
// }
