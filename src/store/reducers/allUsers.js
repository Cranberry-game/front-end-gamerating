import C from '../constants'
import { combineReducers } from 'redux'

const isFetching = (state=false, action) => {
    switch (action.type) {
        case C.FETCH_USERS_REQUEST:
            return true
        case C.CANCEL_FETCHING_USERS:
            return false
        case C.FETCH_USERS_SUCCESS:
            return false
        case C.FETCH_USERS_FAILED:
            return false
        default:
            return state
    }
}

const users = (state=[], action) => {
    switch (action.type) {
        case C.FETCH_USERS_SUCCESS:
            return action.payload
        case C.SET_USER_ADMIN:
            return state.map(user => 
                (user.id === action.payload.id)? {...user, isAdmin: action.payload.isAdmin}: user
            )
        case C.SET_USER_VERIFITY:
            return state.map(user => 
                (user.id === action.payload.id)? {...user, isVerified: action.payload.isVerified}: user
            )
        case C.DELETE_USER:
            return state.filter(user => user.id !== action.payload)
        default:
            return state
    }
}
export default combineReducers({
    isFetching,
    users
})