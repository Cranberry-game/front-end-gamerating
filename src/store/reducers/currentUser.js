import C from '../constants'
import { combineReducers } from 'redux'
import jwtDecode from 'jwt-decode'

const isAuthenticating = (state=false, action) => {
    switch (action.type) {
        case C.LOGIN_USER_REQUEST:
            return true
        case C.LOGIN_USER_SUCCESS:
            return false
        case C.LOGIN_USER_FAILURE:
            return false
        case C.LOGOUT_USER:
            return false
        default:
            return state
    }
}

const isAuthenticated = (state=false, action) => {
    switch (action.type) {
        case C.LOGIN_USER_SUCCESS:
            return true
        case C.LOGOUT_USER:
            return false
        case C.LOGOUT_USER:
            return false
        default:
            return state
    }
}

const token = (state="", action) => {
    switch (action.type) {
        case C.LOGIN_USER_SUCCESS:
            return action.payload
        case C.LOGOUT_USER:
            return ""
        default:
            return state
    }
}

const userName = (state="", action) => {
    switch (action.type) {
        case C.LOGIN_USER_SUCCESS:
            return jwtDecode(action.payload).username
        case C.LOGOUT_USER:
            return ""
        case C.LOGOUT_USER:
            return ""
        default:
            return state
    }
}

const avatar = (state="", action) => {
    switch (action.type) {
        case C.LOGIN_USER_SUCCESS:
            return jwtDecode(action.payload).avatar
        case C.LOGOUT_USER:
            return ""
        default:
            return state
    }
}

const email = (state="", action) => {
    switch (action.type) {
        case C.LOGIN_USER_SUCCESS:
            return jwtDecode(action.payload).email
        case C.LOGOUT_USER:
            return ""
        default:
            return state
    }
}

const id = (state=0, action) => {
    switch (action.type) {
        case C.LOGIN_USER_SUCCESS:
            return jwtDecode(action.payload).id
        case C.LOGOUT_USER:
            return 0
        default:
            return state
    }
}

const isAdmin = (state=false, action) => {
    switch (action.type) {
        case C.LOGIN_USER_SUCCESS:
            return jwtDecode(action.payload).isAdmin
        case C.LOGOUT_USER:
            return false
        default:
            return state
    }
}

const isVerified = (state=false, action) => {
    switch (action.type) {
        case C.LOGIN_USER_SUCCESS:
            return jwtDecode(action.payload).isVerified
        case C.LOGOUT_USER:
            return false
        default:
            return state
    }
}

const gamelists = (state=[], action) => {
    switch (action.type) {
        case C.FETCH_GAMELISTS_BY_USER_SUCCESS:
            return action.payload
        default:
            return state
    }
}

export default combineReducers({
    id,
    isAdmin,
    isVerified,
    token,
    userName,
    avatar,
    email,
    isAuthenticated,
    isAuthenticating,
    gamelists
})
