import C from '../constants'
import { combineReducers } from 'redux'

const isSearching = (state=false, action) => {
    switch (action.type) {
        case C.SEARCHING:
            return true
        case C.SEARCH_SUCCESS:
            return false
        case C.SEARCH_FAILED:
            return false
        default:
            return state
    }
}

const searchText = (state='', action) => {
    switch (action.type) {
        case C.SEARCHING:
            return action.payload
        default:
            return state
    }
}

export default combineReducers({
    isSearching,
    searchText
})