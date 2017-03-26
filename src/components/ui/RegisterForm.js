import muiTheme from '../MuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'


const RegisterForm = () => {
    return (
        <MuiThemeProvider muiTheme={muiTheme}>
            <Paper zDepth={3}>
                <TextField hintText="Email Address" underlineShow={false} />
                <Divider />
                <TextField hintText="Middle name" underlineShow={false} />
                <Divider />
                <TextField hintText="Last name" underlineShow={false} />
                <Divider />
                <TextField hintText="Email address" underlineShow={false} />
                <Divider />
            </Paper>
        </MuiThemeProvider>
    )
}

export default RegisterForm