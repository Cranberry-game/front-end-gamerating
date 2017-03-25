import { FETCH_GAMES_REQUEST, CANCEL_FETCHING_GAMES, FETCH_GAMES_SUCCESS, FETCH_GAMES_FAILED } from '../../constants'
import { combineReducers } from 'redux'

const isFetching = (state=false, action) => {
    switch (action.type) {
        case FETCH_GAMES_REQUEST:
            return true
        case CANCEL_FETCHING_GAMES:
            return false
        case FETCH_GAMES_SUCCESS:
            return false
        case FETCH_GAMES_FAILED:
            return false
        default:
            return state
    }
}

const games = (state=[], action) => {
    switch (action.type) {
        case FETCH_GAMES_SUCCESS:
            return action.payload
        default:
            return state
    }
}

export default combineReducers({
    isFetching,
    games
})