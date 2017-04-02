import C from '../constants'
import { combineReducers } from 'redux'

const isErrorDialogOpen = (state=false, action) => {
    switch (action.type) {
        case C.ADD_ERROR_MESSAGE:
            return true
        case C.CLOSE_ERROR_DIALOG:
            return false
        default:
            return state
    }
}

const errorMessage = (state="", action) => {
    switch (action.type) {
        case C.ADD_ERROR_MESSAGE:
            return action.payload.message
        default:
            return state
    }
}

const errorHeader = (state="", action) => {
    switch (action.type) {
        case C.ADD_ERROR_MESSAGE:
            return action.payload.header
        default:
            return state
    }
}

export default combineReducers({
    isErrorDialogOpen,
    errorMessage,
    errorHeader
})