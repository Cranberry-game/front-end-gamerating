import Home from '../ui/Home'
import { connect } from 'react-redux'
import { search } from '../../store/actions'
import { withRouter } from 'react-router-dom'

const mapStateToProps = state => ({
    
})

const mapDispatchToProps = dispatch => ({
    homeSearch(searchText) {
        dispatch(
            search(searchText)
        )
    }
})


const Container = connect(mapStateToProps, mapDispatchToProps)(Home)

export default withRouter(Container)