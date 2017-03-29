import C from '../constants'
import { combineReducers } from 'redux'

const isFetching = (state=false, action) => {
    switch (action.type) {
        case C.FETCH_GAME_DETAILS_REQUEST:
            return true
        case C.FETCH_GAME_DETAILS_SUCCESS:
            return false
        case C.FETCH_GAME_DETAILS_FAILED:
            return false
        default:
            return state
    }
}

const isPosting = (state=false, action) => {
    switch (action.type) {
        case C.ADD_GAME_REVIEW_REQUEST:
            return true
        case C.ADD_GAME_REVIEW_SUCCESS:
            return false
        case C.ADD_GAME_REVIEW_FAILED:
            return false
        default:
            return state
    }
}

const id = (state=0, action) => {
    switch (action.type) {
        case C.FETCH_GAME_DETAILS_SUCCESS:
            return action.payload.id
        default:
            return state
    }
}
const createTimeStamp = (state=0, action) => {
    switch (action.type) {
        case C.FETCH_GAME_DETAILS_SUCCESS:
            return action.payload.createTimeStamp
        default:
            return state
    }
}

const updateTimeStamp = (state=0, action) => {
    switch (action.type) {
        case C.FETCH_GAME_DETAILS_SUCCESS:
            return action.payload.updateTimeStamp
        default:
            return state
    }
}

const title = (state="", action) => {
    switch (action.type) {
        case C.FETCH_GAME_DETAILS_SUCCESS:
            return action.payload.title
        default:
            return state
    }
}

const platform = (state=[], action) => {
    switch (action.type) {
        case C.FETCH_GAME_DETAILS_SUCCESS:
            return action.payload.platform
        default:
            return state
    }
}

const gameType = (state="", action) => {
    switch (action.type) {
        case C.FETCH_GAME_DETAILS_SUCCESS:
            return action.payload.gameType
        default:
            return state
    }
}

const studio = (state="", action) => {
    switch (action.type) {
        case C.FETCH_GAME_DETAILS_SUCCESS:
            return action.payload.studio
        default:
            return state
    }
}

const price = (state=0, action) => {
    switch (action.type) {
        case C.FETCH_GAME_DETAILS_SUCCESS:
            return action.payload.price
        default:
            return state
    }
}

const totalRating = (state=0, action) => {
    switch (action.type) {
        case C.FETCH_GAME_DETAILS_SUCCESS:
            return action.payload.totalRating
        default:
            return state
    }
}

const releaseCompany = (state="", action) => {
    switch (action.type) {
        case C.FETCH_GAME_DETAILS_SUCCESS:
            return action.payload.releaseCompany
        default:
            return state
    }
}

const releaseDate = (state="", action) => {
    switch (action.type) {
        case C.FETCH_GAME_DETAILS_SUCCESS:
            return action.payload.releaseDate
        default:
            return state
    }
}

const tag = (state=[], action) => {
    switch (action.type) {
        case C.FETCH_GAME_DETAILS_SUCCESS:
            return action.payload.tag
        default:
            return state
    }
}

const reviews = (state=[], action) => {
    switch (action.type) {
        case C.FETCH_GAME_DETAILS_SUCCESS:
            return action.payload.reviews
        case C.ADD_GAME_REVIEW_SUCCESS:
            return [
                ...state,
                action.payload
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
    title,
    platform,
    gameType,
    studio,
    price,
    totalRating,
    releaseCompany,
    releaseDate,
    tag,
    reviews
})
