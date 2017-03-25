import { combineReducers } from 'redux'
import currentUser from './currentUser'
import allGameLists from './allGameLists'
import allGames from './allGames'
import allUsers from './allUsers'
import allReviews from './allReviews'
import suggestions from './suggestions'
import searchText from './searchText'
 
export default combineReducers({
    currentUser,
    allGameLists,
    allGames,
    allUsers,
    allReviews,
    suggestions,
    searchText
})