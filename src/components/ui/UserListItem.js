import muiTheme from '../MuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton'
import Toggle from 'material-ui/Toggle'



const UserListItem = ({ userName="username", avatar="http://leuction.com/static/img/landing/leuction.jpeg", isAdmin=true, isVerified=true }) => {

    const adminStyle = {
        display: 'inline-block',
        width: '10rem',
        margin: '0 4rem'
    }

    const verifiedStyle = {
        display: 'inline-block',
        width: '10rem',
        margin: '0 4rem'
    }

    const deleteStyle = {
        display: 'inline-block',
        width: '15rem',
        float: 'right'
    }

    return (
        <MuiThemeProvider muiTheme={muiTheme}>
            <Card>
                <CardHeader title={userName} avatar={avatar} />
                <CardText>
                    <Toggle
                        toggled={isAdmin}
                        onToggle={() => console.log("nothing")}
                        labelPosition="left"
                        label="Admin"
                        style={adminStyle}
                    />
                    <Toggle
                        toggled={isVerified}
                        onToggle={() => console.log("nothing")}
                        labelPosition="left"
                        label="Verified"
                        style={verifiedStyle}
                    />
                    <RaisedButton label="delete" secondary={true} style={deleteStyle} />
                </CardText>
            </Card>
        </MuiThemeProvider>
    )
}

export default UserListItem