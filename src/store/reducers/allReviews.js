import C from '../../constants'

const initialState = {
    "isFetching": false,
    "didValidate": false,
    "reviews": []
};

export const allGames = (state=initialState, action) => {
    switch (action.type) {
    case C.FETCH_REVIEWS_REQUEST: 
        return (state.isFetching)?
        state:
        {
            "isFetching": true,
            "didValidate": false,
            "reviews": state.reviews
        }
    case C.CANCEL_FETCHING_REVIEWS:
        return {
            "isFetching": false,
            "didValidate": false,
            "reviews": state.reviews
        }
    // payload should contains gamelists
    case C.FETCH_REVIEWS_SUCCESS:
        return {
            "isFetching": false,
            "didValidate": true,
            "reviews": action.payload.reviews
        }
    case C.FETCH_REVIEWS_FAILED:
        return {
            "isFetching": false,
            "didValidate": false,
            "reviews": []
        }
    default:
        return state
    }
}