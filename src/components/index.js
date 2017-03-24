// import '../css/style.scss'
import Test from './ui/Test'
import Home from './ui/Home'
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import muiTheme from './MuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'


export const App = () => (
    <Router>
        <div>
            <MuiThemeProvider muiTheme={muiTheme}>
            <AppBar title="Game Rating" />
            </MuiThemeProvider>
            
            <Switch>
                <Route exact={true} path="/" component={Home} />
                <Route path="/test" component={Test} />
                <Route component={NoMatch} />
            </Switch>
        </div>
    </Router>
)

const NoMatch = ({ location }) => (
    <div>
        <h1>Page Not Found</h1>
        <p>Cannot Load path at <code>{location.pathname}</code></p>
    </div>
)