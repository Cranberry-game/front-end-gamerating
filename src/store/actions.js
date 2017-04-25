import C from './constants'
import fetch from 'isomorphic-fetch'
import { parseJSON, checkHttpStatus } from './utils'
import jwtDecode from 'jwt-decode'
import store from './index'
import { history } from 'react-router-dom'
import FormData from 'isomorphic-form-data'

const apiUrl = 'http://gamerating.info/api/v1/'

export const openLogin = () => ({
    type: "OPEN_LOGIN_FORM"
})

export const closeLogin = () => ({
    type: C.CLOSE_LOGIN_FORM
})

export const openRegister = () => ({
    type: C.OPEN_REGISTER_FORM
})

export const closeRegister = () => ({
    type: C.CLOSE_REGISTER_FORM
})

export const openSettingPopover = () => ({
    type: C.OPEN_SETTING_POPOVER
})

export const closeSettingPopover = () => ({
    type: C.OPEN_SETTING_POPOVER
})

export const openEditAvatarPopoverAction = () => ({
    type: C.OPEN_EDIT_AVATAR
})

export const closeEditAvatarPopoverAction = () => ({
    type: C.CLOSE_EDIT_AVATAR
})

export const saveTempRegisterAction = (userName, email, password, age, address, phone) => ({
    type: C.SAVE_TEMP_REGISTER,
    payload: {
        userName: userName,
        email: email,
        password: password, 
        age: age, 
        address: address, 
        phone: phone
    }
})

export const initTempRegisterAction = () => ({
    type: C.INIT_TEMP_REGISTER
})

export const logout = () => ({
    type: C.LOGOUT_USER
})

export const addErrorDialogAction = (header, message) => ({
    type: C.ADD_ERROR_MESSAGE,
    payload: {
        header: header,
        message: message
    }
})

export const closeErrorDialogAction = () => ({
    type: C.CLOSE_ERROR_DIALOG
})

export const initUploadFilesAction = () => ({
    type: C.INIT_UPLOAD_FILES
})

export const deleteGameFromAddGamelistAction = id => ({
    type: C.REMOVE_GAME_TO_ADD_GAMELIST,
    payload: id
})

export const login = (email, password) => dispatch => {
    dispatch({
        type: C.LOGIN_USER_REQUEST
    })

    // if (anyElementsEmpty({ email, password })) {
    //     console.error('is empty')
    //     return
    // }
    fetch(apiUrl+'login', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            password: password
        })
    })
    .then(checkHttpStatus)
    .then(parseJSON)
    .then(res => {
        dispatch({
            type: C.LOGIN_USER_SUCCESS,
            payload: res.token
        })
        console.log(jwtDecode(res.token))
        console.log(res.token)
    })
    .catch(err => {
        dispatch({
            type: C.LOGIN_USER_FAILURE
        })
        dispatch(
            addErrorDialogAction('Error: ' + err.response.status, err.response.statusText)
        )
    })
}
export const registerAction = (email, name, password, avatar, age, address, phone) => dispatch => {
    dispatch({
        type: C.REGISTER_USER_REQUEST
    })

    // if (anyElementsEmpty({ email, password })) {
    //     console.error('is empty')
    //     return
    // }
    fetch(apiUrl+'user', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            name: name,
            password: password,
            avatar: avatar,
            age: age,
            address: address,
            phone: phone
        })
    })
    .then(checkHttpStatus)
    .then(res => {
        dispatch({
            type: C.REGISTER_USER_SUCCESS
        }) 
        dispatch(
            initTempRegisterAction()
        )
        dispatch(
            addErrorDialogAction("Register Success", "Enjoy!")
        )
    })
    .catch(err => {
        dispatch({
            type: C.REGISTER_USER_FAILURE
        })
        dispatch(
            addErrorDialogAction('Error: ' + err.response.status, err.response.statusText)
        )
    })
}

// search game
export const search = searchText => dispatch => {

    dispatch({
        type: C.SEARCHING,
        payload: searchText
    })

    dispatch({
        type: C.FETCH_GAMES_REQUEST
    })

    fetch(apiUrl + 'game?name=' + searchText, {
        method: 'get',
        headers: {
            'auth': store.getState().currentUser.token
        }
    })
    .then(checkHttpStatus)
    .then(parseJSON)
    .then(res => {
        dispatch({
            type: C.SEARCH_SUCCESS
        })
        dispatch({
            type: C.FETCH_GAMES_SUCCESS,
            payload: res
        })
        console.log(JSON.stringify(res))
    })
    .catch(err => {
        dispatch(
            addErrorDialogAction('Error: ' + err.response.status, err.response.statusText)
        )
    })
}

export const searchGameListAction = searchText => dispatch => {

    dispatch({
        type: C.SEARCHING,
        payload: searchText
    })

    dispatch({
        type: C.FETCH_GAME_LISTS_REQUEST
    })

    fetch(apiUrl + 'gamelist?name=' + searchText, {
        method: 'get',
        headers: {
            'auth': store.getState().currentUser.token
        }
    })
    .then(checkHttpStatus)
    .then(parseJSON)
    .then(res => {
        dispatch({
            type: C.SEARCH_SUCCESS
        })
        dispatch({
            type: C.FETCH_GAME_LISTS_SUCCESS,
            payload: res
        })
        console.log(JSON.stringify(res))
    })
    .catch(err => {
        dispatch({
            type: C.FETCH_GAME_LISTS_FAILED
        })
        dispatch(
            addErrorDialogAction('Error: ' + err.response.status, err.response.statusText)
        )
    })
}

export const queryGameById = id => dispatch => {
    dispatch({
        type: C.FETCH_GAME_DETAILS_REQUEST
    })


    fetch(apiUrl + 'game?id=' + id, {
        method: 'get',
        headers: {
            'auth': store.getState().currentUser.token
        }
    })
    .then(checkHttpStatus)
    .then(parseJSON)
    .then(res => {
        console.log(JSON.stringify(res))
        dispatch({
            type: C.FETCH_GAME_DETAILS_SUCCESS,
            payload: res
        })
    })
    .catch(err => {
        dispatch(
            addErrorDialogAction('Error: ' + err.response.status, err.response.statusText)
        )
    })
}
export const queryGameListByIdAction = id => dispatch => {
    dispatch({
        type: C.FETCH_GAMELIST_DETAILS_REQUEST
    })


    fetch(apiUrl + 'gamelist?id=' + id, {
        method: 'get',
        headers: {
            'auth': store.getState().currentUser.token
        }
    })
    .then(checkHttpStatus)
    .then(parseJSON)
    .then(res => {
        console.log(JSON.stringify(res))
        dispatch({
            type: C.FETCH_GAMELIST_DETAILS_SUCCESS,
            payload: res
        })
    })
    .catch(err => {
        dispatch(
            addErrorDialogAction('Error: ' + err.response.status, err.response.statusText)
        )
    })
}


export const addGameListAction = ( name, userId, description, img, games ) => dispatch => {
    dispatch({
        type: C.ADD_GAME_LIST_REQUEST
    })
    fetch(apiUrl + 'gamelist', {
        method: 'post',
        headers: {
            'auth': store.getState().currentUser.token,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            userId: userId,
            gameId: games,
            name: name,
            img: img,
            description: description,
            totalRate: 5
        })
    })
    .then(checkHttpStatus)
    .then(() => {
        dispatch({
            type: C.ADD_GAME_LIST_SUCCESS
        })
        dispatch(
            addErrorDialogAction('Create Success', 'create game list success')
        )
        console.log('create success')
    })
    
    .catch(err => {
        dispatch({
            type: C.ADD_GAME_LIST_FAILED
        })
        dispatch(
            addErrorDialogAction('Error: ' + err.response.status, err.response.statusText)
        )
    })
}

export const addGameReviewAction = ( userId, rate, content, gameId ) => dispatch => {
    dispatch({
        type: C.ADD_GAME_REVIEW_REQUEST
    })
    fetch(apiUrl + 'review', {
        method: 'post',
        headers: {
            auth: store.getState().currentUser.token,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            userId: userId,
            rate: rate,
            content: content,
            gameId: gameId
        })
    })
    .then(checkHttpStatus)
    .then(() => {
        dispatch({
            type: C.ADD_GAME_REVIEW_SUCCESS,
            payload: {
                rate: rate,
                content: content,
                userId: userId,
                creator: {
                    id: store.getState().currentUser.id,
                    name: store.getState().currentUser.userName,
                    email: store.getState().currentUser.email,
                    avatar: store.getState().currentUser.avatar
                }
            }
        })
    })
    .catch(err => {
        dispatch(
            addErrorDialogAction('Error: ' + err.response.status, err.response.statusText)
        )
    })
}

export const addGameListReviewAction = ( userId, rate, content, gamelistId ) => dispatch => {
    dispatch({
        type: C.ADD_GAMELIST_REVIEW_REQUEST
    })
    fetch(apiUrl + 'glreview', {
        method: 'post',
        headers: {
            auth: store.getState().currentUser.token,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            userId: userId,
            rate: rate,
            content: content,
            gameListId: gamelistId
        })
    })
    .then(checkHttpStatus)
    .then(() => {
        dispatch({
            type: C.ADD_GAMELIST_REVIEW_SUCCESS,
            payload: {
                rate: rate,
                content: content,
                userId: userId,
                creator: {
                    id: store.getState().currentUser.id,
                    name: store.getState().currentUser.userName,
                    email: store.getState().currentUser.email,
                    avatar: store.getState().currentUser.avatar
                }
            }
        })
    })
    .catch(err => {
        dispatch(
            addErrorDialogAction('Error: ' + err.response.status, err.response.statusText)
        )
    })
}

export const addGameAction = ( title, gameType, price, releaseCompany, releaseDate, studio, platform, cover, description, screenshot ) => dispatch => {
    dispatch({
        type: C.ADD_GAME_REQUEST
    })
    fetch(apiUrl + 'game', {
        method: 'post',
        headers: {
            'auth': store.getState().currentUser.token,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: title,
            gameType: gameType,
            totalRate: 5,
            price: price, 
            releaseCompany: releaseCompany,
            releaseDate: releaseDate,
            studio: studio,
            platform: platform,
            cover: cover,
            description: description,
            screenshot: screenshot

        })
    })
    .then(checkHttpStatus)
    .then(() => {
        dispatch({
            type: C.ADD_GAME_SUCCESS
        })
        console.log('create success')
    })
    
    .catch(err => {
        dispatch(
            addErrorDialogAction('Error: ' + err.response.status, err.response.statusText)
        )
    })
}

export const uploadAvatarAction = acceptedFiles => dispatch => {

    dispatch({
        type: C.UPLOAD_AVATAR_REQUEST
    })
    let data = new FormData()
    data.append('files', acceptedFiles)

    fetch(apiUrl + 'upload/avatar', {
        method: 'POST',
        headers: {
            'auth': store.getState().currentUser.token
        },
        body: data
    })
    .then(checkHttpStatus)
    .then(parseJSON)
    .then(res => {
        dispatch({
            type: C.UPLOAD_AVATAR_SUCCESS,
            payload: res.url
        })
    })
    .catch(err => {
        dispatch({
            type: C.UPLOAD_AVATAR_FAILED
        })
        dispatch(
            addErrorDialogAction('Error: ' + err.response.status, err.response.statusText)
        )
    })
}
export const uploadGameScreenShotsAction = acceptedFiles => dispatch => {

    dispatch({
        type: C.UPLOAD_GAME_SCREENSHOT_REQUEST
    })
    let data = new FormData()
    acceptedFiles.forEach(file => data.append('files', file))

    fetch(apiUrl + 'upload/scshot', {
        method: 'POST',
        headers: {
            'auth': store.getState().currentUser.token
        },
        body: data
    })
    .then(checkHttpStatus)
    .then(parseJSON)
    .then(res => {
        dispatch({
            type: C.UPLOAD_GAME_SCREENSHOT_SUCCESS,
            payload: res.url
        })
    })
    .catch(err => {
        dispatch({
            type: C.UPLOAD_GAME_SCREENSHOT_FAILED
        })
        dispatch(
            addErrorDialogAction('Error: ' + err.response.status, err.response.statusText)
        )
    })
}
export const uploadGameCoverAction = acceptedFiles => dispatch => {

    dispatch({
        type: C.UPLOAD_GAME_COVER_REQUEST
    })
    let file = acceptedFiles[0]
    let data = new FormData()
    data.append('files', file)

    // fetch('http://gamerating.info/api/v1/upload/cover', {
    fetch(apiUrl + 'upload/cover', {
        method: 'POST',
        headers: {
            'auth': store.getState().currentUser.token
        },
        body: data
    })
    .then(checkHttpStatus)
    .then(parseJSON)
    .then(res => {
        console.log(res.url)
        dispatch({
            type: C.UPLOAD_GAME_COVER_SUCCESS,
            payload: res.url
        })
    })
    .catch(err => {
        console.error(err)
        dispatch({
            type: C.UPLOAD_GAME_COVER_FAILED
        })
        dispatch(
            addErrorDialogAction('Error: ' + err.response.status, err.response.statusText)
        )
    })
}
export const uploadGamelistCoverAction = acceptedFiles => dispatch => {

    dispatch({
        type: C.UPLOAD_GAMELIST_COVER_REQUEST
    })
    let file = acceptedFiles[0]
    let data = new FormData()
    data.append('files', file)

    fetch(apiUrl + 'upload/cover', {
        method: 'POST',
        headers: {
            'auth': store.getState().currentUser.token
        },
        body: data
    })
    .then(checkHttpStatus)
    .then(parseJSON)
    .then(res => {
        console.log(res.url)
        dispatch({
            type: C.UPLOAD_GAMELIST_COVER_SUCCESS,
            payload: res.url
        })
    })
    .catch(err => {
        console.error(err)
        dispatch({
            type: C.UPLOAD_GAMELIST_COVER_FAILED
        })
        dispatch(
            addErrorDialogAction('Error: ' + err.response.status, err.response.statusText)
        )
    })
}

export const removeGameFromGameListAction = (gameId, gameListId) => dispatch => {
    dispatch({
        type: C.REMOVE_GAME_FROM_GAMELIST_REQUEST
    })
    fetch(apiUrl + 'gamelist', {
        method: 'put',
        headers: {
            'auth': store.getState().currentUser.token,
            'Content-Type': 'application/json',
            'type': 'delete'
        },
        body: JSON.stringify({
            gameId: gameId,
            gameListId: gameListId
        })
    })
    .then(checkHttpStatus)
    .then(res => {
        dispatch({
            type: C.REMOVE_GAME_FROM_GAMELIST_SUCCESS,
            payload: gameId
        })
    })
    .catch(err => {
        dispatch({
            type: C.REMOVE_GAME_FROM_GAMELIST_FAILED,
            payload: gameId
        })
        dispatch(
            addErrorDialogAction('Error: ' + err.response.status, err.response.statusText)
        )
    })

}

export const queryGameByPrefixAction = prefix => dispatch => {
    console.log("query suggestions")
    dispatch({
        type: C.FETCH_GAME_SUGGESTIONS_REQUEST
    })
    fetch(apiUrl + 'game/suggest?name=' + prefix, {
        method: 'get',
        headers: {
            'auth': store.getState().currentUser.token
        }
    })
    .then(checkHttpStatus)
    .then(parseJSON)
    .then(res => {
        dispatch({
            type: C.FETCH_GAME_SUGGESTIONS_SUCCESS,
            payload: res
        })
    })
    .catch(err => {
        dispatch({
            type: C.FETCH_GAME_SUGGESTIONS_FAILED
        })
        dispatch(
            addErrorDialogAction('Error: ' + err.response.status, err.response.statusText)
        )
    })
}
export const addGameToAddGamelistByFullnameAction = fullname => dispatch => {
    fetch(apiUrl + 'game/suggest?fullname=' + fullname, {
        method: 'get',
        headers: {
            'auth': store.getState().currentUser.token
        }
    })
    .then(checkHttpStatus)
    .then(parseJSON)
    .then(res => {
        if (store.getState().addGameList.games.every((cur, index, array) => cur.gameId !== res.gameId)) {
            dispatch({
                type: C.ADD_GAME_TO_ADD_GAMELIST,
                payload: res
            })
        }
    })
    .catch(err => {
        dispatch(
            addErrorDialogAction('Error: ' + err.response.status, err.response.statusText)
        )
    })
}

export const queryAllUsersAction = () => dispatch => {
    dispatch({
        type: C.FETCH_USERS_REQUEST
    })
    fetch(apiUrl + 'user/all', {
        method: 'get',
        headers: {
            'auth': store.getState().currentUser.token
        }
    })
    .then(checkHttpStatus)
    .then(parseJSON)
    .then(res => {
        dispatch({
            type: C.FETCH_USERS_SUCCESS,
            payload: res
        })
    })
    .catch(err => {
        dispatch({
            type: C.FETCH_USERS_FAILED
        })
        dispatch(
            addErrorDialogAction('Error: ' + err.response.status, err.response.statusText)
        )
    })
}

export const toggleUserAdminAction = (id, isAdmin) => dispatch => {
    fetch(apiUrl + 'user/auth', {
        method: 'put',
        headers: {
            'auth': store.getState().currentUser.token,
            'Content-Type': 'application/json',
            'type': 'priority'
        },
        body: JSON.stringify({
            userId: id,
            isAdmin: isAdmin
        })
    })
    .then(checkHttpStatus)
    .then(res => {
        dispatch({
            type: C.SET_USER_ADMIN,
            payload: {
                id: id,
                isAdmin: isAdmin
            }
        })
    })
    .catch(err => {
        dispatch(
            addErrorDialogAction('Error: ' + err.response.status, err.response.statusText)
        )
    })
}
export const toggleUserVerifityAction = (id, isVerified) => dispatch => {
    fetch(apiUrl + 'user/auth', {
        method: 'put',
        headers: {
            'auth': store.getState().currentUser.token,
            'Content-Type': 'application/json',
            'type': 'verify'
        },
        body: JSON.stringify({
            userId: id,
            isVerified: isVerified
        })
    })
    .then(checkHttpStatus)
    .then(res => {
        dispatch({
            type: C.SET_USER_VERIFITY,
            payload: {
                id: id,
                isVerified: isVerified
            }
        })
    })
    .catch(err => {
        dispatch(
            addErrorDialogAction('Error: ' + err.response.status, err.response.statusText)
        )
    })
}
export const deleteUserAction = id => dispatch => {
    fetch(apiUrl + 'user?id=' + id, {
        method: 'delete',
        headers: {
            'auth': store.getState().currentUser.token
        }
    })
    .then(checkHttpStatus)
    .then(res => {
        dispatch({
            type: C.DELETE_USER,
            payload: id
        })
    })
    .catch(err => {
        dispatch(
            addErrorDialogAction('Error: ' + err.response.status, err.response.statusText)
        )
    })
}

export const getGameOrGamelistSuggestionsAction = name => dispatch => {
    dispatch({
        type: C.FETCH_SEARCH_SUGGESTIONS_REQUEST
    })
    fetch(apiUrl + 'search?name=' + name)
    .then(checkHttpStatus)
    .then(parseJSON)
    .then(res => {
        dispatch({
            type: C.FETCH_SEARCH_SUGGESTIONS_SUCCESS,
            payload: res
        })
    })
    .catch(err => {
        dispatch({
            type: C.FETCH_SEARCH_SUGGESTIONS_FAILED
        })
        dispatch(
            addErrorDialogAction('Error: ' + err.response.status, err.response.statusText)
        )
    })
}

export const getGameListByUserIdAction = id => dispatch => {
    fetch(apiUrl + 'gamelist?uid=' + id)
    .then(checkHttpStatus)
    .then(parseJSON)
    .then(res => {
        dispatch({
            type: C.FETCH_GAMELISTS_BY_USER_SUCCESS,
            payload: res
        })
    })
    .catch(err => {
        dispatch(
            addErrorDialogAction('Error: ' + err.response.status, err.response.statusText)
        )
    })
}

export const addGameToGameListAction = (gameId, gameListId) => dispatch => {
    fetch(apiUrl + 'gamelist', {
        method: 'put',
        headers: {
            'type': 'add',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            gameId: gameId,
            gameListId: gameListId
        })
    })
    .then(checkHttpStatus)
    .then(res => {
        console.log(gameId, gameListId)
        dispatch({
            type: C.ADD_GAME_TO_GAMELIST_SUCCESS
        })
    })
    .catch(err => {
        dispatch(
            addErrorDialogAction('Error: ' + err.response.status, err.response.statusText)
        )
    })
}

const anyElementsEmpty = elements => {
    for (let element in elements) {
        if (!elements[element]) {
            return true;
        }
    }
    return false;
}