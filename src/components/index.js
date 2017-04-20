import '../css/style.scss'
import { Component } from 'react'
import Test from './ui/Test'
import Home from './containers/Home'
import ManageUser from './containers/ManageUser'
import { HashRouter as Router, Switch, Route, Redirect, withRouter } from 'react-router-dom'
import muiTheme from './MuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import Avatar from 'material-ui/Avatar'
import Dialog from 'material-ui/Dialog'
import Popover from 'material-ui/Popover'
import Menu from 'material-ui/Menu'
import MenuItem from 'material-ui/MenuItem'
import Search from './containers/Search'
import GameListDetail from './containers/GameListDetail'
import GameDetail from './containers/GameDetail'
import TextField from 'material-ui/TextField'
import ExpandingSearchButton from './ui/ExpandingSearchButton'
import FlatButton from 'material-ui/FlatButton'
import LoginForm from './ui/LoginForm'
import RegisterForm from './ui/RegisterForm'
import AddGame from './containers/AddGame'
import AddGameList from './containers/AddGameList'
import { connect } from 'react-redux'
import '../css/components/index.scss'
import { openLogin, closeLogin, openRegister, closeRegister, openSettingPopover, closeSettingPopover, login, logout, closeErrorDialogAction, registerAction } from '../store/actions'
import { ConnectedRouter, push } from 'react-router-redux'
import history from '../history'

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

    handleCloseError = () => {
        const { closeErrorDialog } = this.props
        closeErrorDialog()
    }

    handleTouchLogout = () => {
        const { handleLogout } = this.props
        handleLogout()
        this.setState({
            open: false
        })
    }

    handleTouchManageUser = () => {
        const { redirectToManageUser=f=>f } = this.props
        redirectToManageUser()
        this.setState({
            open: false
        })
    }

    handleTouchAddGame = () => {
        const { redirectToAddGame=f=>f } = this.props
        redirectToAddGame()
        this.setState({
            open: false
        })
    }

    handleTouchAddGameList = () => {
        const { redirectToAddGameList=f=>f } = this.props
        redirectToAddGameList()
        this.setState({
            open: false
        })
    }

    handleTitleTouchTap = e => {
        const { redirectToHome=f=>f } = this.props
        redirectToHome()
    }

    render() {

        const actions = [
            <FlatButton
                label="OK"
                primary={true}
                keyboardFocused={true}
                onTouchTap={this.handleCloseError}
            />,
        ]

        const { isLoginFormOpen=false, isRegisterFormOpen=false, isUserSettingPopoverOpen=false, isAuthenticated=true, isErrorDialogOpen=false, errorMessage='', errorHeader='', avatar='http://img.duoziwang.com/2016/12/08/18594927932.jpg', openRegisterForm=f=>f, openLoginForm=f=>f, closeRegisterForm=f=>f, closeLoginForm=f=>f, handleLogin=f=>f, openSetting=f=>f, closeSetting=f=>f, handlelogout=f=>f, register=f=>f, isAdmin=false, isVerified=false } = this.props

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
            // <Router>
            <ConnectedRouter history={history}>
                <div>
                    <div className='navigator'>
                        <MuiThemeProvider muiTheme={muiTheme}>
                            <div>
                                <AppBar title="Game Rating" iconElementLeft={null} showMenuIconButton={false} onTitleTouchTap={this.handleTitleTouchTap}>
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
                                            {(isAdmin)?<MenuItem primaryText="Manage Users" onTouchTap={this.handleTouchManageUser} />: null}
                                            {(isAdmin)?<MenuItem primaryText="Add Game" onTouchTap={this.handleTouchAddGame} />: null}
                                            {(isVerified || isAdmin)?<MenuItem primaryText="Add Game List" onTouchTap={this.handleTouchAddGameList} />: null}
                                            <MenuItem primaryText="Sign out" onTouchTap={this.handleTouchLogout}/>
                                        </Menu>
                                    </Popover>
                                </div>:
                                <div>
                                    <FlatButton label="Register" onTouchTap={openRegisterForm} style={loginButtonStyle}/> 
                                    <FlatButton label="Login" onTouchTap={openLoginForm} style={registerButtonStyle}/>
                                </div>}
                                </AppBar>
                                <Dialog
                                    title={errorHeader}
                                    actions={actions}
                                    modal={false}
                                    open={isErrorDialogOpen}
                                    onRequestClose={this.handleCloseError}
                                    >
                                    {errorMessage}
                                </Dialog>
                            </div>
                        </MuiThemeProvider>    
                    </div>
                    
                    <Switch>
                        <Route exact={true} path="/" component={Home} />
                        <Route path="/search" component={Search}/>
                        <Route path="/gamelist/:listId" component={GameListDetail}/>
                        <Route path="/game/:gameId" component={GameDetail}/>
                        <Route path="/manageuser" component={ManageUser} />
                        <Route path="/addgamelist" component={AddGameList} />
                        <Route path="/addgame" component={AddGame} />
                        <Route path="/test" component={Test} />
                        <Route component={NoMatch} />
                    </Switch>
                    <LoginForm isLoginFormOpen={isLoginFormOpen} closeLoginForm={closeLoginForm} handleLogin={handleLogin}/>
                    <RegisterForm isRegisterFormOpen={isRegisterFormOpen} closeRegisterForm={closeRegisterForm} register={register}/>
                </div>
            </ConnectedRouter>
            // </Router>
        )
    }
}

const mapStateToProps = state => ({
    isLoginFormOpen: state.isLoginFormOpen,
    isRegisterFormOpen: state.isRegisterFormOpen,
    isUserSettingPopoverOpen: state.isUserSettingPopoverOpen,
    isAuthenticated: state.currentUser.isAuthenticated,
    avatar: state.currentUser.avatar,
    errorMessage: state.error.errorMessage,
    errorHeader: state.error.errorHeader,
    isErrorDialogOpen: state.error.isErrorDialogOpen,
    isAdmin: state.currentUser.isAdmin,
    isVerified: state.currentUser.isVerified
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
    handleLogout() {
        dispatch(
            logout()
        )
    },
    closeErrorDialog() {
        dispatch(
            closeErrorDialogAction()
        )
    },
    register({ email, name, password, avatar, age, address, phone }) {
        dispatch(
            registerAction(email, name, password, avatar, age, address, phone)
        )
    },
    redirectToHome() {
        dispatch(
            push('/')
        )
    },
    redirectToManageUser() {
        dispatch(
            push('/manageuser')
        )
    },
    redirectToAddGame() {
        dispatch(
            push('/addgame')
        )
    },
    redirectToAddGameList() {
        dispatch(
            push('/addgamelist')
        )
    }
    
})

export default connect(mapStateToProps, mapDispatchToProps)(App)