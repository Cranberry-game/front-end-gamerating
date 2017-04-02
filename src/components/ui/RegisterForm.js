import muiTheme from '../MuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton'
import Dialog from 'material-ui/Dialog'
import Divider from 'material-ui/Divider'
import TextField from 'material-ui/TextField'

const RegisterForm = ({ isRegisterFormOpen=false, closeRegisterForm=f=>f, register=f=>f }) => {

    let _userName = '', _email = '', _password = '', _age = '', _address = '', _phone = ''

    const handleRegister = e => {
        e.preventDefault()
        register({
            email: _email,
            name: _userName,
            password: _password,
            avatar: "http://leuction.com/static/img/landing/leuction.jpeg",
            age: _age,
            address: _address,
            phone: _phone
        })
        console.log('userName ' + _userName)
        console.log('email ' + _email)
        console.log('password ' + _password)
        console.log('age ' + _age)
        console.log('address ' + _address)
        console.log('phone ' + _phone)
    }

    const handleClose = () => {
        closeRegisterForm()
        _userName = ''
        _email = ''
        _password = ''
        _age = ''
        _address = ''
        _phone = ''
    }

    const actions = [
        <RaisedButton label='Register' fullWidth={true} onTouchTap={handleRegister}/>
    ]

    return (
        <MuiThemeProvider muiTheme={muiTheme}>
            <Dialog title='Register' actions={actions} open={isRegisterFormOpen} modal={false} onRequestClose={handleClose}>
                <form className='register-form'></form>
                <TextField hintText="User Name" underlineShow={false} onChange={(e, input) => _userName = input}/>
                <Divider />
                <TextField hintText="Email Address" underlineShow={false} onChange={(e, input) => _email = input}/>
                <Divider />
                <TextField hintText="Password" underlineShow={false} type='password' onChange={(e, input) => _password = input}/>
                <Divider />
                <TextField hintText="Confirm Password" underlineShow={false} type='password'/>
                <Divider />
                <TextField hintText="Age" underlineShow={false} onChange={(e, input) => _age = input}/>
                <Divider />
                <TextField hintText="Address" underlineShow={false} onChange={(e, input) => _address = input}/>
                <Divider />
                <TextField hintText="Phone" underlineShow={false} onChange={(e, input) => _phone = input}/>
                <Divider />
            </Dialog>
        </MuiThemeProvider>
    )
}

export default RegisterForm