import { UPDATE_SEARCH_TEXT } from '../../constants'

const searchText = (state="", action) => {
    switch (action.type) {
    case UPDATE_SEARCH_TEXT:
        return action.payload.searchText
    default:
        return state
    }
}

export default searchText