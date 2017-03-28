import C from '../constants'
import { combineReducers } from 'redux'

const isFetching = (state=false, action) => {
    switch (action.type) {
        case C.FETCH_GAME_LISTS_REQUEST:
            return true
        case C.CANCEL_FETCHING_GAME_LISTS:
            return false
        case C.FETCH_GAME_LISTS_SUCCESS:
            return false
        case C.FETCH_GAME_LISTS_FAILED:
            return false
        default:
            return state
    }
}

const gameLists = (state=[], action) => {
    switch (action.type) {
        //payload should contains an array of gamelists
        case C.FETCH_GAME_LISTS_SUCCESS:
            return action.payload
        default:
            return state
    }
}

export default combineReducers({
    isFetching,
    gameLists
})
