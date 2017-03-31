import C from '../constants'
import { combineReducers } from 'redux'
import currentUser from './currentUser'
import allGameLists from './allGameLists'
import currentGameList from './currentGameList'
import allGames from './allGames'
import currentGame from './currentGame'
import suggestions from './suggestions'
import search from './search'
import addGameList from './addGameList'
 
const isLoginFormOpen = (state=false, action) => {
    switch (action.type) {
        case C.OPEN_LOGIN_FORM:
            return true
        case C.CLOSE_LOGIN_FORM:
            return false
        case C.LOGIN_USER_SUCCESS:
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
        case C.LOGIN_USER_SUCCESS:
            return false
        default:
            return state
    }
} 

const isUserSettingPopoverOpen = (state=false, action) => {
    switch (action.type) {
        case C.OPEN_SETTING_POPOVER:
            return true
        case C.CLOSE_SETTING_POPOVER:
            return false
        case C.LOGOUT_USER:
            return false
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
    search,
    isLoginFormOpen,
    isRegisterFormOpen,
    isUserSettingPopoverOpen,
    addGameList
})