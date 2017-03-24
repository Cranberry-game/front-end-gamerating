import React from 'react'
import { render } from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { Provider } from 'react-redux'
import { App } from './components'
import Test from './components/ui/Test'

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin()

window.React = React
    

render (
    <App/>,
    document.getElementById('react-container')
)