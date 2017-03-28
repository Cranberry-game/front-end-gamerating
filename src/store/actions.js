import C from './constants'

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


}


export const everyElementIsFulfiled = elements => {
    return elements.every(element => elements[element])
}