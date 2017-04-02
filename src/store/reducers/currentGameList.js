import C from '../constants'
import { combineReducers } from 'redux'

const isFetching = (state=false, action) => {
    switch (action.type) {
        case C.FETCH_GAMELIST_DETAILS_REQUEST:
            return true
        case C.FETCH_GAMELIST_DETAILS_SUCCESS:
            return false
        case C.FETCH_GAMELIST_DETAILS_FAILED:
            return false
        default:
            return state
    }
}

const isPosting = (state=false, action) => {
    switch (action.type) {
        case C.ADD_GAMELIST_REVIEW_REQUEST:
            return true
        case C.ADD_GAMELIST_REVIEW_SUCCESS:
            return false
        case C.ADD_GAMELIST_REVIEW_FAILED:
            return false
        default:
            return state
    }
}

const id = (state=0, action) => {
    switch (action.type) {
        case C.FETCH_GAMELIST_DETAILS_SUCCESS:
            return action.payload.id
        default:
            return state
    }
}
const createTimeStamp = (state=0, action) => {
    switch (action.type) {
        case C.FETCH_GAMELIST_DETAILS_SUCCESS:
            return action.payload.createTime
        default:
            return state
    }
}

const updateTimeStamp = (state=0, action) => {
    switch (action.type) {
        case C.FETCH_GAMELIST_DETAILS_SUCCESS:
            return action.payload.updateTime
        default:
            return state
    }
}

const name = (state="", action) => {
    switch (action.type) {
        case C.FETCH_GAMELIST_DETAILS_SUCCESS:
            return action.payload.gameListName
        default:
            return state
    }
}

const img = (state="", action) => {
    switch (action.type) {
        case C.FETCH_GAMELIST_DETAILS_SUCCESS:
            return action.payload.img
        default:
            return state
    }
}

const creator = (state=null, action) => {
    switch (action.type) {
        case C.FETCH_GAMELIST_DETAILS_SUCCESS:
            return action.payload.creator
        default:
            return state
    }
}

const games = (state=[], action) => {
    switch (action.type) {
        case C.FETCH_GAMELIST_DETAILS_SUCCESS:
            return action.payload.games
        default:
            return state
    }
}

const reviews = (state=[], action) => {
    switch (action.type) {
        case C.FETCH_GAMELIST_DETAILS_SUCCESS:
            return action.payload.reviews
        case C.ADD_GAMELIST_REVIEW_SUCCESS:
            return [
                action.payload,
                ...state
            ]
        default:
            return state
    }
}

export default combineReducers({
    isFetching,
    isPosting,
    id,
    createTimeStamp,
    updateTimeStamp,
    name,
    img,
    creator,
    games,
    reviews
})
