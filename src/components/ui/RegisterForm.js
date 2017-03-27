import muiTheme from '../MuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'


const RegisterForm = () => {
    return (
        <MuiThemeProvider muiTheme={muiTheme}>
            <Paper zDepth={3}>
                <form action='submit' className='register-form'></form>
                <TextField hintText="User Name" underlineShow={false} />
                <Divider />
                <TextField hintText="Email Address" underlineShow={false} />
                <Divider />
                <TextField hintText="Password" underlineShow={false} type='password' />
                <Divider />
                <TextField hintText="Confirm Password" underlineShow={false} type='password' />
                <Divider />
            </Paper>
        </MuiThemeProvider>
    )
}

export default RegisterForm