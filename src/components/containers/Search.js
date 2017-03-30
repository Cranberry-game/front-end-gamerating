import Search from '../ui/Search'
import { connect } from 'react-redux'
import { search } from '../../store/actions'
import { withRouter } from 'react-router-dom'

const mapStateToProps = state => ({
    games: state.allGames.games
})

const mapDispatchToProps = dispatch => ({
    searchGame(searchText) {
        dispatch(
            search(searchText)
        )
    }
})


const Container = connect(mapStateToProps, mapDispatchToProps)(Search)
export default withRouter(Container)