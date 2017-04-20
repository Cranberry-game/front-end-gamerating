import ManageUser from '../ui/ManageUser'
import { connect } from 'react-redux'
import { queryAllUsersAction, toggleUserAdminAction, toggleUserVerifityAction, deleteUserAction } from '../../store/actions'
import { withRouter } from 'react-router-dom'

const mapStateToProps = state => ({
    users: state.allUsers.users
})

const mapDispatchToProps = dispatch => ({
    queryAllUsers() {
        dispatch(
            queryAllUsersAction()
        )
    },
    toggleUserAdmin({id, isAdmin}) {
        console.log('toggleUserAdmin')
        dispatch(
            toggleUserAdminAction(id, isAdmin)
        )
    },
    toggleUserVerifity({id, isVerified}) {
        console.log('toggleUserVerifity')
        dispatch(
            toggleUserVerifityAction(id, isVerified)
        )
    },
    deleteUser(id) {
        console.log('deleteUser')
        dispatch(
            deleteUserAction(id)
        )
    }
})


const Container = connect(mapStateToProps, mapDispatchToProps)(ManageUser)
export default withRouter(Container)