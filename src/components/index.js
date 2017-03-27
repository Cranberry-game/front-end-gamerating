import '../css/style.scss'
import React from 'react'
import Test from './ui/Test'
import Home from './ui/Home'
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import muiTheme from './MuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import Search from './ui/Search'
import GameListDetail from './ui/GameListDetail'
import TextField from 'material-ui/TextField'
import ExpandingSearchButton from './ui/ExpandingSearchButton'

const appBarStyle = {
    position: 'fixed',
}

export const App = (
    <Router>
        <div>
            <div className='navigator'>
                <MuiThemeProvider muiTheme={muiTheme}>
                    <AppBar title="Game Rating">
                        {/*<TextField hintText="User Name" underlineShow={false} />*/}
                        <ExpandingSearchButton/>
                    </AppBar>
                </MuiThemeProvider>    
            </div>
            
            <Switch>
                <Route exact={true} path="/" component={Home} />
                <Route path="/search/:searchText" component={Search}/>
                <Route path="/gamelist/:listId" component={GameListDetail}/>
                <Route path="/test" component={Test} />
                <Route component={NoMatch} />
            </Switch>
        </div>
    </Router>
)

const NoMatch = ({ location }) => (
    <div className="no-match">
        <h1 className="no-match-header">Page Not Found</h1>
        <p className="no-match-desc">Cannot Load path at <code>{location.pathname}</code></p>
    </div>
)