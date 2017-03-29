import Search from '../ui/Search'
import { connect } from 'react-redux'
import { search } from '../../store/actions'

const mapStateToProps = state => ({
    games: state.allGames.games
})

// const mapDispatchToProps = dispatch => ({
//     homeSearch(searchText) {
//         dispatch(
//             search(searchText)
//         )
//     }
// })


export default connect(mapStateToProps)(Search)