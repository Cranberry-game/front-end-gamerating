import muiTheme from '../MuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton'
import Dialog from 'material-ui/Dialog'
import Divider from 'material-ui/Divider'
import TextField from 'material-ui/TextField'

const LoginForm = ({ isLoginFormOpen=false, closeLoginForm=f=>f, handleLogin=f=>f }) => {

    let _email = '', _password = ''

    const onLogin = e => {
        handleLogin({
            email: _email,
            password: _password
        })
        e.preventDefault()
        console.log(_email)
        console.log(_password)
        
    }

    const onClose = () => {
        closeLoginForm()
        _email = ''
        _password = ''
    }

    const actions = [
        <RaisedButton label='Login' fullWidth={true} onTouchTap={onLogin}/>
    ]

    return (
        <MuiThemeProvider muiTheme={muiTheme}>
            <Dialog title='Log In' actions={actions} open={isLoginFormOpen} modal={false} onRequestClose={onClose}>
                <form className='login-form'></form>
                <TextField hintText="Email Address" underlineShow={false} onChange={(e, input) => _email = input}/>
                <Divider />
                <TextField hintText="Password" underlineShow={false} type='password' onChange={(e, input) => _password = input}/>
                <Divider />
            </Dialog>
        </MuiThemeProvider>
    )
}

export default LoginForm