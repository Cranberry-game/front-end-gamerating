import C from '../constants'
import { combineReducers } from 'redux'

const isPostingGameCover = (state=false, action) => {
    switch (action.type) {
        case C.UPLOAD_GAME_COVER_REQUEST: 
            return true
        case C.UPLOAD_GAME_COVER_SUCCESS:
            return false
        case C.UPLOAD_GAME_COVER_FAILED:
            return false
        default:
            return state
    }
}
const isPostingGameScreenshots = (state=false, action) => {
    switch (action.type) {
        case C.UPLOAD_GAME_SCREENSHOT_REQUEST: 
            return true
        case C.UPLOAD_GAME_SCREENSHOT_SUCCESS:
            return false
        case C.UPLOAD_GAME_SCREENSHOT_FAILED:
            return false
        default:
            return state
    }
}
const isPostingGamelistCover = (state=false, action) => {
    switch (action.type) {
        case C.UPLOAD_GAMELIST_COVER_REQUEST: 
            return true
        case C.UPLOAD_GAMELIST_COVER_SUCCESS:
            return false
        case C.UPLOAD_GAMELIST_COVER_FAILED:
            return false
        default:
            return state
    }
}

const hasUploadedGameCover = (state=false, action) => {
    switch (action.type) {
        case C.UPLOAD_GAME_COVER_SUCCESS:
            return true
        case C.INIT_UPLOAD_FILES:
            return false
        default:
            return state
    }
}
const hasUploadedGameScreenshots = (state=false, action) => {
    switch (action.type) {
        case C.UPLOAD_GAME_SCREENSHOT_SUCCESS:
            return true
        case C.INIT_UPLOAD_FILES:
            return false
        default:
            return state
    }
}
const hasUploadedGamelistCover = (state=false, action) => {
    switch (action.type) {
        case C.UPLOAD_GAMELIST_COVER_SUCCESS:
            return true
        case C.INIT_UPLOAD_FILES:
            return false
        default:
            return state
    }
}

const gameCover = (state="", action) => {
    switch (action.type) {
        case C.UPLOAD_GAME_COVER_SUCCESS:
            return action.payload
        case C.INIT_UPLOAD_FILES:
            return ""
        default:
            return state
    }
}

const gameScreenshots = (state=[], action) => {
    switch (action.type) {
        case C.UPLOAD_GAME_SCREENSHOT_SUCCESS:
            return [
                ...state,
                ...action.payload
            ]
        case C.INIT_UPLOAD_FILES:
            return []
        default:
            return state
    }
}

const gamelistCover = (state="", action) => {
    switch (action.type) {
        case C.UPLOAD_GAMELIST_COVER_SUCCESS:
            return action.payload
        case C.INIT_UPLOAD_FILES:
            return ""
        default:
            return state
    }
}

export default combineReducers({
    isPostingGameCover,
    isPostingGameScreenshots,
    isPostingGamelistCover,
    hasUploadedGameCover,
    hasUploadedGameScreenshots,
    hasUploadedGamelistCover,
    gameCover,
    gameScreenshots,
    gamelistCover
})
