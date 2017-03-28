import C from '../constants'

const searchText = (state="", action) => {
    switch (action.type) {
    case C.UPDATE_SEARCH_TEXT:
        return action.payload.searchText
    default:
        return state
    }
}

export default searchText