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
            email: 'true@gmail.com',
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
    const location = {
        pathname: './search/1'
    }

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
}


const anyElementsEmpty = elements => {
    for (let element in elements) {
        if (!elements[element]) {
            return true;
        }
    }
    return false;
}