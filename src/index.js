import React from 'react'
import { render } from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { Provider } from 'react-redux'
import App from './components'
import Test from './components/ui/Test'
import store from './store'

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin()

// const store = storeFactory()
window.React = React
window.store = store
    

render (
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('react-container')
)