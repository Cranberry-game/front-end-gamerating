import C from '../../constants'

const initialState = {
    "isFetching": false,
    "didValidate": false,
    "gameLists": []
};

export const allGameLists = (state=initialState, action) => {
    switch (action.type) {
    case C.FETCH_GAME_LISTS_REQUEST: 
        return (state.isFetching)? 
        state:
        {
            "isFetching": true,
            "didValidate": false,
            "gameLists": state.gameLists
        }
    case C.CANCEL_FETCHING_GAME_LISTS:
        return {
            "isFetching": false,
            "didValidate": false,
            "gameLists": state.gameLists
        }
    // payload should contains gamelists
    case C.FETCH_GAME_LISTS_SUCCESS:
        return {
            "isFetching": false,
            "didValidate": true,
            "gameLists": action.payload.gameLists
        }
    case C.FETCH_GAME_LISTS_FAILED:
        return {
            "isFetching": false,
            "didValidate": false,
            "gameLists": []
        }
    default:
        return state
    }
}