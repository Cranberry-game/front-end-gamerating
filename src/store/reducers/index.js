import C from '../constants'
import { combineReducers } from 'redux'
import currentUser from './currentUser'
import allGameLists from './allGameLists'
import currentGameList from './currentGameList'
import allGames from './allGames'
import allUsers from './allUsers'
import currentGame from './currentGame'
import suggestions from './suggestions'
import search from './search'
import addGameList from './addGameList'
import error from './error'
import uploadFiles from './uploadFiles'
import register from './register'
import { routerReducer } from 'react-router-redux'
 
const isLoginFormOpen = (state=false, action) => {
    switch (action.type) {
        case C.OPEN_LOGIN_FORM:
            return true
        case C.CLOSE_LOGIN_FORM:
            return false
        case C.LOGIN_USER_SUCCESS:
            return false
        case C.LOGIN_USER_FAILURE:
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
        case C.LOGIN_USER_FAILURE:
            return false
        case C.REGISTER_USER_SUCCESS:
            return false
        case C.REGISTER_USER_FAILURE:
            return false
        default:
            return state
    }
} 
const isEditAvatarOpen = (state=false, action) => {
    switch (action.type) {
        case C.OPEN_EDIT_AVATAR:
            return true
        case C.CLOSE_EDIT_AVATAR:
            return false
        case C.LOGIN_USER_SUCCESS:
            return false
        case C.LOGIN_USER_FAILURE:
            return false
        case C.REGISTER_USER_SUCCESS:
            return false
        case C.REGISTER_USER_FAILURE:
            return false
        default:
            return state
    }
} 

const isRegistering = (state=false, action) => {
    switch (action.type) {
        case C.REGISTER_USER_REQUEST:
            return true
        case C.REGISTER_USER_SUCCESS:
            return false
        case C.REGISTER_USER_FAILURE:
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

const isAddingAGame = (state=false, action) => {
    switch (action.type) {
        case C.ADD_GAME_REQUEST:
            return true
        case C.ADD_GAME_SUCCESS:
            return false
        case C.ADD_GAME_FAILED:
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
    allUsers,
    currentGame,
    suggestions,
    search,
    isLoginFormOpen,
    isRegisterFormOpen,
    isUserSettingPopoverOpen,
    addGameList,
    isAddingAGame,
    error,
    isRegistering,
    routerReducer,
    uploadFiles,
    isEditAvatarOpen,
    register
})