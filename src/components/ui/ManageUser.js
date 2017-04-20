import { Component } from 'react'
import { Link } from 'react-router-dom'
import muiTheme from '../MuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AutoComplete from 'material-ui/AutoComplete'
import UserList from './UserList'
import '../../css/components/ManageUser.scss'


class ManageUser extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchText: ''
        }
    }

    componentWillMount = () => {
        const { queryAllUsers=f=>f } = this.props
        queryAllUsers()
    }

    onSearchUsers = searchText => {
        this.setState({
            searchText: searchText
        })
    }

    render() {

        const { dataSource=[], users=[], toggleUserAdmin=f=>f, toggleUserVerifity=f=>f, deleteUser=f=>f } = this.props

        return (
            <div className='manage-user-wrapper'>
                <div className='user-search-bar-wrapper'>
                    <MuiThemeProvider muiTheme={muiTheme}>
                        <AutoComplete hintText="Type the user you want to search" dataSource={dataSource} onUpdateInput={this.onSearchUsers} className="user-search-bar"/>
                    </MuiThemeProvider>
                </div>
                <div className='userlist-wrapper'>
                    <UserList users={users.filter(user => user.name.toLowerCase().replace(/\s/g,'').startsWith(this.state.searchText.toLowerCase().replace(/\s/g,'')))} toggleUserAdmin={toggleUserAdmin} toggleUserVerifity={toggleUserVerifity} deleteUser={deleteUser} />
                </div>
            </div>
        )
    }
}

export default ManageUser