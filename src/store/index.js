import appReducer from './reducers'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

const logger = createLogger()

const store = createStore(appReducer, composeWithDevTools(
    applyMiddleware(thunk, logger)
))

export default store

// export default (initialState={}) => {
//     return applyMiddleware(thunk, logger)(createStore)(appReducer, initialState)
// }
