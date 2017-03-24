import C from '../../constants'
import jwtDecode from 'jwt-decode'

const initialState = {
    "token": null,
    "userName": null,
    "avatar": null,
    "email": null,
    "isAuthenticated": false,
    "isAuthenticating": false,
    "statusText": null
}

export const currentUser = (state=initialState, action) => {
    switch(action.type) {
    case C.LOGIN_USER_REQUEST: 
        return (state.isAuthenticated || state.isAuthenticating)?
        state:
        {
            "token": null,
            "userName": null,
            "avatar": null,
            "email": null,
            "isAuthenticated": false,
            "isAuthenticating": true,
            "statusText": null
        }
    // action should payload token only
    case C.LOGIN_USER_SUCCESS:
        return {
            "token": action.payload.token,
            "userName": jwtDecode(action.payload.token).userName,
            "avatar": jwtDecode(action.payload.token).avatar,
            "email": jwtDecode(action.payload.token).email,
            "isAuthenticated": true,
            "isAuthenticating": false,
            "statusText": null
        }
    // action payload should contains status and statusMessage
    case C.LOGIN_USER_FAILURE:
        return {
            "token": null,
            "userName": null,
            "avatar": null,
            "email": null,
            "isAuthenticated": false,
            "isAuthenticating": false,
            "statusText": `Authentication Error: ${action.payload.status} ${action.payload.statusMessage}`
        }
    case C.LOGOUT_USER:
        return (state.isAuthenticated)? 
        {
            "token": null,
            "userName": null,
            "avatar": null,
            "email": null,
            "isAuthenticated": false,
            "isAuthenticating": false,
            "statusText": `You Have Logout`
        }:
        state
    default:
        return state
    }
}