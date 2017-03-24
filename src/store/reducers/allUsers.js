import C from '../../constants'

const initialState = {
    "isFetching": false,
    "didValidate": false,
    "users": []
};

export const allGameLists = (state=initialState, action) => {
    switch (action.type) {
    case C.FETCH_USERS_REQUEST: 
        return (state.isFetching)? 
        state:
        {
            "isFetching": true,
            "didValidate": false,
            "users": state.users
        }
    case C.CANCEL_FETCHING_USERS:
        return {
            "isFetching": false,
            "didValidate": false,
            "users": state.users
        }
    // payload should contains gamelists
    case C.FETCH_USERS_SUCCESS:
        return {
            "isFetching": false,
            "didValidate": true,
            "users": action.payload.users
        }
    case C.FETCH_USERS_FAILED:
        return {
            "isFetching": false,
            "didValidate": false,
            "users": []
        }
    default:
        return state
    }
}