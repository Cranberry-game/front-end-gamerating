import C from '../constants'
import { combineReducers } from 'redux'

const isFetching = (state=false, action) => {
    switch (action.type) {
        case C.FETCH_GAMES_REQUEST:
            return true
        case C.CANCEL_FETCHING_GAMES:
            return false
        case C.FETCH_GAMES_SUCCESS:
            return false
        case C.FETCH_GAMES_FAILED:
            return false
        default:
            return state
    }
}

const games = (state=[], action) => {
    switch (action.type) {
        case C.FETCH_GAMES_SUCCESS:
            return action.payload
        default:
            return state
    }
}

export default combineReducers({
    isFetching,
    games
})