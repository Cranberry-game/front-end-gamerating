import Home from '../ui/Home'
import { connect } from 'react-redux'
import { search, getGameOrGamelistSuggestionsAction } from '../../store/actions'
import { withRouter } from 'react-router-dom'

const mapStateToProps = state => ({
    gameOrGamelistSuggestions: state.suggestions.gameOrGamelistSuggestions
})

const mapDispatchToProps = dispatch => ({
    homeSearch(searchText) {
        dispatch(
            search(searchText)
        )
    },
    getGameOrGamelistSuggestions(searchText) {
        dispatch(
            getGameOrGamelistSuggestionsAction(searchText)
        )
    }
    
})


const Container = connect(mapStateToProps, mapDispatchToProps)(Home)

export default withRouter(Container)