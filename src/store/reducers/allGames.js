import C from '../../constants'

const initialState = {
    "isFetching": false,
    "didValidate": false,
    "games": []
};

export const allGames = (state=initialState, action) => {
    switch (action.type) {
    case C.FETCH_GAMES_REQUEST: 
        return (state.isFetching)?
        state:
        {
            "isFetching": true,
            "didValidate": false,
            "games": state.games
        }
    case C.CANCEL_FETCHING_GAMES:
        return {
            "isFetching": false,
            "didValidate": false,
            "games": state.games
        }
    // payload should contains gamelists
    case C.FETCH_GAMES_SUCCESS:
        return {
            "isFetching": false,
            "didValidate": true,
            "games": action.payload.games
        }
    case C.FETCH_GAMES_FAILED:
        return {
            "isFetching": false,
            "didValidate": false,
            "games": []
        }
    default:
        return state
    }
}