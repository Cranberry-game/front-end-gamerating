import '../css/style.scss'
import { Component } from 'react'
import Test from './ui/Test'
import Home from './containers/Home'
import ManageUser from './ui/ManageUser'
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import muiTheme from './MuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import Avatar from 'material-ui/Avatar'
import Popover from 'material-ui/Popover'
import Menu from 'material-ui/Menu'
import MenuItem from 'material-ui/MenuItem'
import Search from './containers/Search'
import GameListDetail from './ui/GameListDetail'
import GameDetail from './containers/GameDetail'
import TextField from 'material-ui/TextField'
import ExpandingSearchButton from './ui/ExpandingSearchButton'
import FlatButton from 'material-ui/FlatButton'
import LoginForm from './ui/LoginForm'
import RegisterForm from './ui/RegisterForm'
import AddGameList from './containers/AddGameList'
import { connect } from 'react-redux'
import '../css/components/index.scss'
import { openLogin, closeLogin, openRegister, closeRegister, openSettingPopover, closeSettingPopover, login, logout } from '../store/actions'

const NoMatch = ({ location }) => (
    <div className="no-match">
        <h1 className="no-match-header">Page Not Found</h1>
        <p className="no-match-desc">Cannot Load path at <code>{location.pathname}</code></p>
    </div>
)

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false
        }
    }

    handleTouchTap = e => {
        e.preventDefault()
        this.setState({
            open: true,
            anchorEl: e.currentTarget
        })
    }

    handleRequestClose = () => {
        this.setState({
            open: false
        })
    }

    render() {

        const { isLoginFormOpen=false, isRegisterFormOpen=false, isUserSettingPopoverOpen=false, isAuthenticated=true, avatar='http://img.duoziwang.com/2016/12/08/18594927932.jpg', openRegisterForm=f=>f, openLoginForm=f=>f, closeRegisterForm=f=>f, closeLoginForm=f=>f, handleLogin=f=>f, openSetting=f=>f, closeSetting=f=>f, handlelogout=f=>f } = this.props

        const loginButtonStyle = {
            bottom: -12,
            color: 'white'
        }

        const registerButtonStyle = {
            bottom: -12,
            color: 'white'
        }

        const avatarStyle = {
            top: 12,
            position: 'relative'
        }

        return (
            <Router>
                <div>
                    <div className='navigator'>
                        <MuiThemeProvider muiTheme={muiTheme}>
                            <AppBar title="Game Rating">
                            {(isAuthenticated)? 
                            <div>
                                <div onClick={this.handleTouchTap}>
                                    <Avatar src={avatar} style={avatarStyle}/> 
                                </div>
                                <Popover
                                    open={this.state.open}
                                    anchorEl={this.state.anchorEl}
                                    anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
                                    targetOrigin={{horizontal: 'right', vertical: 'top'}}
                                    onRequestClose={this.handleRequestClose}
                                    >
                                    <Menu>
                                        <MenuItem primaryText="Settings" />
                                        <MenuItem primaryText="Sign out" />
                                    </Menu>
                                </Popover>
                            </div>:
                            <div>
                                <FlatButton label="Register" onTouchTap={openRegisterForm} style={loginButtonStyle}/> 
                                <FlatButton label="Login" onTouchTap={openLoginForm} style={registerButtonStyle}/>
                            </div>}
                            </AppBar>
                        </MuiThemeProvider>    
                    </div>
                    
                    <Switch>
                        <Route exact={true} path="/" component={Home} />
                        <Route path="/search" component={Search}/>
                        <Route path="/gamelist/:listId" component={GameListDetail}/>
                        <Route path="/game/:gameId" component={GameDetail}/>
                        <Route path="/manageuser" component={ManageUser} />
                        <Route path="/addgamelist" component={AddGameList} />
                        <Route path="/test" component={Test} />
                        <Route component={NoMatch} />
                    </Switch>
                    <LoginForm isLoginFormOpen={isLoginFormOpen} closeLoginForm={closeLoginForm} handleLogin={handleLogin}/>
                    <RegisterForm isRegisterFormOpen={isRegisterFormOpen} closeRegisterForm={closeRegisterForm}/>
                </div>
            </Router>
        )
    }
}

const mapStateToProps = state => ({
    isLoginFormOpen: state.isLoginFormOpen,
    isRegisterFormOpen: state.isRegisterFormOpen,
    isUserSettingPopoverOpen: state.isUserSettingPopoverOpen,
    isAuthenticated: state.currentUser.isAuthenticated,
    avatar: state.currentUser.avatar
})
        
const mapDispatchToProps = dispatch => ({
    openRegisterForm() {
        dispatch(
            openRegister()
        )
    },
    openLoginForm() {
        dispatch(
            openLogin()
        )
    },
    closeRegisterForm() {
        dispatch(
            closeRegister()
        )
    },
    closeLoginForm() {
        dispatch(
            closeLogin()
        )
    },
    openSetting() {
        dispatch (
            openSettingPopover()
        )
    },
    closeSetting() {
        dispatch (
            closeSettingPopover()
        )
    },
    handleLogin({email, password}) {
        dispatch(
            login(email, password)
        )
    },
    handlelogout() {
        dispatch(
            logout()
        )
    }
    
})

export default connect(mapStateToProps, mapDispatchToProps)(App)