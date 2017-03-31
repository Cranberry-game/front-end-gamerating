import AddGameList from '../ui/AddGameList'
import { connect } from 'react-redux'
import { addGameListAction } from '../../store/actions'
import { withRouter } from 'react-router-dom'

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
    addGameList({ name, userId, description, img, games }) {
        console.log('binding success')
        dispatch(
            addGameListAction(name, userId, description, img, games)
        )
    }
})


export default connect(mapStateToProps ,mapDispatchToProps)(AddGameList)

