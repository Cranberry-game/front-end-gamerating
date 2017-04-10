import AddGameList from '../ui/AddGameList'
import { connect } from 'react-redux'
import { addGameListAction, queryGameByPrefixAction } from '../../store/actions'
import { withRouter } from 'react-router-dom'

const mapStateToProps = state => ({
    gameSuggestions: state.addGameList.suggestions,
    games: state.addGameList.games
})

const mapDispatchToProps = dispatch => ({
    addGameList({ name, userId, description, img, games }) {
        dispatch(
            addGameListAction(name, userId, description, img, games)
        )
    },
    queryGameByPrefix(prefix) {
        console.log('binding success')
        dispatch(
            queryGameByPrefixAction(prefix)
        )
    }
})


export default connect(mapStateToProps ,mapDispatchToProps)(AddGameList)

