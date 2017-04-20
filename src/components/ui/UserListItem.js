import muiTheme from '../MuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton'
import Toggle from 'material-ui/Toggle'
import '../../css/components/UserListItem.scss'



const UserListItem = ({ id=0, userName="", avatar="", isAdmin=false, isVerified=false, toggleUserAdmin=f=>f, toggleUserVerifity=f=>f, deleteUser=f=>f }) => {

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

    const handleToggleUserAdmin = e => {
        e.preventDefault()
        toggleUserAdmin({
            id: id,
            isAdmin: !isAdmin
        })
    }

    const handleToggleUserVerifity = e => {
        e.preventDefault()
        toggleUserVerifity({
            id: id,
            isVerified: !isVerified
        })
    }

    const handleDeleteUser = e => {
        e.preventDefault()
        deleteUser(id)
    }

    return (
        <MuiThemeProvider muiTheme={muiTheme}>
            <Card>
                <CardHeader title={userName} avatar={avatar} />
                <CardText>
                    <Toggle
                        toggled={isAdmin}
                        onToggle={handleToggleUserAdmin}
                        labelPosition="left"
                        label="Admin"
                        style={adminStyle}
                    />
                    <Toggle
                        toggled={isVerified}
                        onToggle={handleToggleUserVerifity}
                        labelPosition="left"
                        label="Verified"
                        style={verifiedStyle}
                    />
                    <RaisedButton label="delete" secondary={true} style={deleteStyle} onTouchTap={handleDeleteUser}/>
                </CardText>
            </Card>
        </MuiThemeProvider>
    )
}

export default UserListItem