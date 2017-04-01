import GameListDetail from '../ui/GameListDetail'
import { connect } from 'react-redux'
import { queryGameListByIdAction, addGameReviewAction } from '../../store/actions'
import { withRouter } from 'react-router-dom'

const mapStateToProps = state => ({
    id: state.currentGameList.id,
    createTimeStamp: state.currentGameList.createTimeStamp,
    updateTimeStamp: state.currentGameList.updateTimeStamp,
    gamelistName: state.currentGameList.name,
    games: state.currentGameList.games
})

const mapDispatchToProps = dispatch => ({
    queryGameList(id) {
        dispatch(
            queryGameListByIdAction(id)
        )
    }
})


const Container = connect(mapStateToProps, mapDispatchToProps)(GameListDetail)

export default withRouter(Container)