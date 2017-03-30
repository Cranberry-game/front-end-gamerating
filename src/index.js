import React from 'react'
import C from './store/constants'
import { render } from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { Provider } from 'react-redux'
import App from './components'
import Test from './components/ui/Test'
import store from './store'
import jwtDecode from 'jwt-decode'

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin()

const saveToken = () => {
    localStorage['token'] = store.getState().currentUser.token
}

// const store = storeFactory()
window.React = React
window.store = store
    
store.subscribe(saveToken)

if (localStorage['token']) {
    console.log(jwtDecode(localStorage['token']))
    store.dispatch({
        type: C.LOGIN_USER_SUCCESS,
        payload: localStorage['token']
    })
}

render (
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('react-container')
)