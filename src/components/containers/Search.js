import Search from '../ui/Search'
import { connect } from 'react-redux'
import { search, searchGameListAction } from '../../store/actions'
import { withRouter } from 'react-router-dom'

const mapStateToProps = state => ({
    games: state.allGames.games,
    gameLists: state.allGameLists.gameLists
})

const mapDispatchToProps = dispatch => ({
    searchGame(searchText) {
        dispatch(
            search(searchText)
        )
    },
    searchGameList(searchText) {
        dispatch(
            searchGameListAction(searchText)
        )
    }
})


const Container = connect(mapStateToProps, mapDispatchToProps)(Search)
export default withRouter(Container)