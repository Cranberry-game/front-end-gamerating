import C from '../constants'
import { combineReducers } from 'redux'

const userName = (state='', action) => {
    switch (action.type) {
        case C.INIT_TEMP_REGISTER:
            return ''
        case C.SAVE_TEMP_REGISTER:
            return action.payload.userName
        default:
            return state
    }
}

const email = (state='', action) => {
    switch (action.type) {
        case C.INIT_TEMP_REGISTER:
            return ''
        case C.SAVE_TEMP_REGISTER:
            return action.payload.email
        default:
            return state
    }
}

const password = (state='', action) => {
    switch (action.type) {
        case C.INIT_TEMP_REGISTER:
            return ''
        case C.SAVE_TEMP_REGISTER:
            return action.payload.password
        default:
            return state
    }
}
const age = (state='', action) => {
    switch (action.type) {
        case C.INIT_TEMP_REGISTER:
            return ''
        case C.SAVE_TEMP_REGISTER:
            return action.payload.age
        default:
            return state
    }
}
const address = (state='', action) => {
    switch (action.type) {
        case C.INIT_TEMP_REGISTER:
            return ''
        case C.SAVE_TEMP_REGISTER:
            return action.payload.address
        default:
            return state
    }
}

const phone = (state='', action) => {
    switch (action.type) {
        case C.INIT_TEMP_REGISTER:
            return ''
        case C.SAVE_TEMP_REGISTER:
            return action.payload.phone
        default:
            return state
    }
}

const avatar = (state='', action) => {
    switch (action.type) {
        case C.INIT_TEMP_REGISTER:
            return ''
        case C.UPLOAD_AVATAR_SUCCESS:
            return action.payload
        default:
            return state
    }
}

export default combineReducers({
    userName,
    email,
    password,
    age,
    address,
    phone,
    avatar
})