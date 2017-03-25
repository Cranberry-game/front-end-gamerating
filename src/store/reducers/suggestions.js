import { FETCH_SEARCH_SUGGESTIONS_REQUEST, FETCH_SEARCH_SUGGESTIONS_SUCCESS, FETCH_SEARCH_SUGGESTIONS_FAILED } from '../../constants'
import { combineReducers } from 'redux'

const isFetching = (state=false, action) => {
    switch (action.type) {
        case FETCH_SEARCH_SUGGESTIONS_REQUEST:
            return true
        case FETCH_SEARCH_SUGGESTIONS_SUCCESS:
            return false
        case FETCH_SEARCH_SUGGESTIONS_FAILED:
            return false
        default:
            return state
    }
}

const gameNames = (state=[], action) => {
    switch(action.type) {
        case FETCH_SEARCH_SUGGESTIONS_SUCCESS:
            return action.payload
        default:
            return state
    }
}

export default combineReducers({
    isFetching,
    gameNames
})
