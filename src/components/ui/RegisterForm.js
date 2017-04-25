import { Component } from 'react'
import muiTheme from '../MuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton'
import Dialog from 'material-ui/Dialog'
import Divider from 'material-ui/Divider'
import TextField from 'material-ui/TextField'
import Avatar from 'material-ui/Avatar'

class RegisterForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: '',
            email: '',
            password: '',
            age: '',
            address: '',
            phone: ''
        }
    }

    componentWillMount = () => {
        this.syncStateToRedux()
    }

    handleRegister = e => {
        const { avatar='', register=f=>f } = this.props
        e.preventDefault()
        register({
            email: this.state.email,
            name: this.state.userName,
            password: this.state.password,
            avatar: avatar,
            age: this.state.age,
            address: this.state.address,
            phone: this.state.phone
        })
        console.log('userName ' + this.state.userName)
        console.log('email ' + this.state.email)
        console.log('password ' + this.state.password)
        console.log('age ' + this.state.age)
        console.log('address ' + this.state.address)
        console.log('phone ' + this.state.phone)
    }

    handleClose = () => {
        const { closeRegisterForm=f=>f, initTempRegister=f=>f } = this.props
        initTempRegister()
        this.syncStateToRedux()
        closeRegisterForm()
    }

    handleTouchAvatar = () => {
        const { closeRegisterForm=f=>f, openEditAvatarPopover=f=>f, saveTempRegister=f=>f } = this.props
        saveTempRegister({
            userName: this.state.userName,
            email: this.state.email,
            password: this.state.password,
            age: this.state.age,
            address: this.state.address,
            phone: this.state.phone
        })
        closeRegisterForm()
        openEditAvatarPopover()
    }

    handleUserNameChange = (e, input) => {
        this.setState({
            userName: input
        })
    }

    handleEmailChange = (e, input) => {
        this.setState({
            email: input
        })
    }

    handlePasswordChange = (e, input) => {
        this.setState({
            password: input
        })
    }

    handleAgeChange = (e, input) => {
        this.setState({
            age: input
        })
    }

    handleAddressChange = (e, input) => {
        this.setState({
            address: input
        })
    }

    handlePhoneChange = (e, input) => {
        this.setState({
            phone: input
        })
    }

    syncStateToRedux = () => {
        const { userName='', email='', password='', age='', address='', phone='' } = this.props
        this.setState({
            userName: userName,
            email: email,
            password: password,
            age: age,
            address: address,
            phone: phone
        })
    }

    render() {
        const actions = [
            <RaisedButton label='Register' fullWidth={true} onTouchTap={this.handleRegister}/>
        ]
        const { isRegisterFormOpen=false, avatar='' } = this.props
        
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <Dialog title='Register' actions={actions} open={isRegisterFormOpen} modal={false} onRequestClose={this.handleClose}>
                    <form className='register-form'></form>
                    <Avatar onTouchTap={this.handleTouchAvatar} src={avatar}/> 
                    <Divider />
                    <TextField value={this.state.userName} hintText="User Name" underlineShow={false} onChange={this.handleUserNameChange}/>
                    <Divider />
                    <TextField value={this.state.email} hintText="Email Address" underlineShow={false} onChange={this.handleEmailChange}/>
                    <Divider />
                    <TextField value={this.state.password} hintText="Password" underlineShow={false} type='password' onChange={this.handlePasswordChange}/>
                    <Divider />
                    <TextField hintText="Confirm Password" underlineShow={false} type='password'/>
                    <Divider />
                    <TextField value={this.state.age} hintText="Age" underlineShow={false} onChange={this.handleAgeChange}/>
                    <Divider />
                    <TextField value={this.state.address} hintText="Address" underlineShow={false} onChange={this.handleAddressChange}/>
                    <Divider />
                    <TextField value={this.state.phone} hintText="Phone" underlineShow={false} onChange={this.handlePhoneChange}/>
                    <Divider />
                </Dialog>
            </MuiThemeProvider>
        )
    }
}


export default RegisterForm