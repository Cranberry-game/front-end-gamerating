import muiTheme from '../MuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'


const LoginForm = () => {
    return (
        <MuiThemeProvider muiTheme={muiTheme}>
            <Paper zDepth={3}>
                <TextField hintText="Email Address" underlineShow={false} />
                <Divider />
                <TextField hintText="PassWord" underlineShow={false} />
            </Paper>
        </MuiThemeProvider>
    )
}

export default LoginForm