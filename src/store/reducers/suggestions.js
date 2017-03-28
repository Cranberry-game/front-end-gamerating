import C from '../constants'
import { combineReducers } from 'redux'

const isFetching = (state=false, action) => {
    switch (action.type) {
        case C.FETCH_SEARCH_SUGGESTIONS_REQUEST:
            return true
        case C.FETCH_SEARCH_SUGGESTIONS_SUCCESS:
            return false
        case C.FETCH_SEARCH_SUGGESTIONS_FAILED:
            return false
        default:
            return state
    }
}

const gameNames = (state=[], action) => {
    switch(action.type) {
        case C.FETCH_SEARCH_SUGGESTIONS_SUCCESS:
            return action.payload
        default:
            return state
    }
}

export default combineReducers({
    isFetching,
    gameNames
})
