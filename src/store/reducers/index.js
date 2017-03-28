import C from '../constants'
import { combineReducers } from 'redux'
import currentUser from './currentUser'
import allGameLists from './allGameLists'
import currentGameList from './currentGameList'
import allGames from './allGames'
import currentGame from './currentGame'
import suggestions from './suggestions'
 
const isLoginFormOpen = (state=false, action) => {
    switch (action.type) {
        case C.OPEN_LOGIN_FORM:
            return true
        case C.CLOSE_LOGIN_FORM:
            return false
        default:
            return state
    }
} 

const isRegisterFormOpen = (state=false, action) => {
    switch (action.type) {
        case C.OPEN_REGISTER_FORM:
            return true
        case C.CLOSE_REGISTER_FORM:
            return false
        default:
            return state
    }
} 

const searchText = (state="", action) => {
    switch (action.type) {
    case C.UPDATE_SEARCH_TEXT:
        return action.payload.searchText
    default:
        return state
    }
}

export default combineReducers({
    currentUser,
    allGameLists,
    currentGameList,
    allGames,
    currentGame,
    suggestions,
    searchText,
    isLoginFormOpen,
    isRegisterFormOpen
})