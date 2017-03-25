import { FETCH_GAME_LISTS_REQUEST, CANCEL_FETCHING_GAME_LISTS, FETCH_GAME_LISTS_SUCCESS, FETCH_GAME_LISTS_FAILED } from '../../constants'
import { combineReducers } from 'redux'

const isFetching = (state=false, action) => {
    switch (action.type) {
        case FETCH_GAME_LISTS_REQUEST:
            return true
        case CANCEL_FETCHING_GAME_LISTS:
            return false
        case FETCH_GAME_LISTS_SUCCESS:
            return false
        case FETCH_GAME_LISTS_FAILED:
            return false
        default:
            return state
    }
}

const gameLists = (state=[], action) => {
    switch (action.type) {
        //payload should contains an array of gamelists
        case FETCH_GAME_LISTS_SUCCESS:
            return action.payload
        default:
            return state
    }
}

export default combineReducers({
    isFetching,
    gameLists
})
