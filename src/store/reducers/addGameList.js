import C from '../constants'
import { combineReducers } from 'redux'

const isFetchingSuggestion = (state=false, action) => {
    switch (action.type) {
        case C.FETCH_GAME_SUGGESTIONS_REQUEST: 
            return true
        case C.FETCH_GAME_SUGGESTIONS_SUCCESS:
            return false
        case C.FETCH_GAME_SUGGESTIONS_FAILED:
            return false
        default:
            return state
    }
}
const isPosting = (state=false, action) => {
    switch (action.type) {
        case C.ADD_GAME_LIST_REQUEST: 
            return true
        case C.ADD_GAME_LIST_SUCCESS:
            return false
        case C.ADD_GAMELIST_REVIEW_FAILED:
            return false
        default:
            return state
    }
}

const suggestions = (state=[], action) => {
    switch (action.type) {
        //payload should contains an array of gamelists
        case C.FETCH_GAME_SUGGESTIONS_SUCCESS:
            return action.payload
        default:
            return state
    }
}

const games = (state=[], action) => {
    switch (action.type) {
        case C.ADD_GAME_TO_ADD_GAMELIST:
            return [
                ...state,
                action.payload
            ]
        case C.REMOVE_GAME_TO_ADD_GAMELIST:
            return state.filter(game => game.id !== action.payload)
        default:
            return state
    }
}

export default combineReducers({
    isFetchingSuggestion,
    isPosting,
    suggestions,
    games
})
