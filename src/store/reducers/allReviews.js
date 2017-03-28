import C from '../constants'
import { combineReducers } from 'redux'

const isFetching = (state=false, action) => {
    switch (action.type) {
        case C.FETCH_REVIEWS_REQUEST:
            return true
        case C.CANCEL_FETCHING_REVIEWS:
            return false
        case C.FETCH_REVIEWS_SUCCESS:
            return false
        case C.FETCH_REVIEWS_FAILED:
            return false
        default:
            return state
    }
}

const reviews = (state=[], action) => {
    switch (action.type) {
        case C.FETCH_REVIEWS_SUCCESS:
            return action.type
        default:
            return state
    }
}

export default combineReducers({
    isFetching,
    reviews
})