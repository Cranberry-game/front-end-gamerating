import { FETCH_USERS_REQUEST, CANCEL_FETCHING_USERS, FETCH_USERS_SUCCESS, FETCH_USERS_FAILED } from '../../constants'
import { combineReducers } from 'redux'

const isFetching = (state=false, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return true
        case CANCEL_FETCHING_USERS:
            return false
        case FETCH_USERS_SUCCESS:
            return false
        case FETCH_USERS_FAILED:
            return false
        default:
            return state
    }
}

const users = (state=[], action) => {
    switch (action.type) {
        case FETCH_USERS_SUCCESS:
            return action.payload
        default:
            return state
    }
}
export default combineReducers({
    isFetching,
    users
})