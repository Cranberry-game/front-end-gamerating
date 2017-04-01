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
    }

    render() {

        const { dataSource=[] } = this.props

        return (
            <div className='manage-user-wrapper'>
                <div className='user-search-bar-wrapper'>
                    <MuiThemeProvider muiTheme={muiTheme}>
                        <AutoComplete hintText="Type the user you want to search" dataSource={dataSource} onUpdateInput={res => console.log(res)} className="user-search-bar" onNewRequest={res => console.log(res)}/>
                    </MuiThemeProvider>
                </div>
                <div className='userlist-wrapper'>
                    <UserList />
                </div>
            </div>
        )
    }
}

export default ManageUser