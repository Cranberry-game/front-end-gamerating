import C from '../constants'
import { combineReducers } from 'redux'
import currentUser from './currentUser'
import allGameLists from './allGameLists'
import allGames from './allGames'
import allUsers from './allUsers'
import allReviews from './allReviews'
import suggestions from './suggestions'
import searchText from './searchText'
 
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

export default combineReducers({
    currentUser,
    allGameLists,
    allGames,
    allUsers,
    allReviews,
    suggestions,
    searchText,
    isLoginFormOpen,
    isRegisterFormOpen
})