import muiTheme from '../MuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton'
import Toggle from 'material-ui/Toggle'

const UserListItem = ({ userName="username", avatar="http://leuction.com/static/img/landing/leuction.jpeg", isAdmin=true, isVerified=true }) => {
    return (
        <MuiThemeProvider muiTheme={muiTheme}>
            <Card>
                <CardHeader title={userName} avatar={avatar} />
                <CardText>
                    <Toggle
                        toggled={isAdmin}
                        onToggle={() => console.log("nothing")}
                        labelPosition="right"
                        label="Admin"
                    />
                    <Toggle
                        toggled={isVerified}
                        onToggle={() => console.log("nothing")}
                        labelPosition="right"
                        label="Verified"
                    />
                    <RaisedButton label="delete" secondary={true} />
                </CardText>
            </Card>
        </MuiThemeProvider>
    )
}

export default UserListItem