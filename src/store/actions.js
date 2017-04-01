import C from './constants'
import fetch from 'isomorphic-fetch'
import { parseJSON, checkHttpStatus } from './utils'
import jwtDecode from 'jwt-decode'
import store from './index'
import { history } from 'react-router-dom'

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

export const logout = () => ({
    type: C.LOGOUT_USER
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
            email: 'user1@gmail.com',
            password: '123456'
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
    .catch(err => console.error(err))

}

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
    .catch(err => console.error(err))
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
    .catch(err => console.error(err))
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
    .catch(err => console.error(err))
}


export const addGameListAction = ( name, userId, description, img, games ) => dispatch => {
    dispatch({
        type: C.FETCH_GAME_SUGGESTIONS_REQUEST
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
            img: "http://img1.joyreactor.cc/pics/post/full/Kemono-Friends-Anime-Serval-(Kemono-Friends)-Kaban-3710791.jpeg",
            description: description,
            totalRate: 5
        })
    })
    .then(checkHttpStatus)
    .then(() => {
        dispatch({
            type: C.FETCH_GAME_SUGGESTIONS_SUCCESS
        })
        console.log('create success')
    })
    
    .catch(err => console.error(err))
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
    .catch(err => console.error(err))
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
            gamelistId: gamelistId
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
    .catch(err => console.error(err))
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
    
    .catch(err => console.error(err))
}

const anyElementsEmpty = elements => {
    for (let element in elements) {
        if (!elements[element]) {
            return true;
        }
    }
    return false;
}