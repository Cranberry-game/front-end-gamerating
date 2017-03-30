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
        default:
            return state
    }
}

const statusText = (state="", action) => {
    switch (action.type) {
        case C.LOGIN_USER_FAILURE:
            return `Authentication Error: ${action.payload.status} ${action.payload.statusMessage}`
        default:
            return state
    }
}

const token = (state="", action) => {
    switch (action.type) {
        case C.LOGIN_USER_SUCCESS:
            return action.payload
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

export default combineReducers({
    token,
    userName,
    avatar,
    email,
    isAuthenticated,
    isAuthenticating,
    statusText
})
