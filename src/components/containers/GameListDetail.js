import GameListDetail from '../ui/GameListDetail'
import { connect } from 'react-redux'
import { queryGameListByIdAction, addGameListReviewAction, removeGameFromGameListAction } from '../../store/actions'
import { withRouter } from 'react-router-dom'

const mapStateToProps = state => ({
    id: state.currentGameList.id,
    createTimeStamp: state.currentGameList.createTimeStamp,
    updateTimeStamp: state.currentGameList.updateTimeStamp,
    gamelistName: state.currentGameList.name,
    games: state.currentGameList.games,
    reviews: state.currentGameList.reviews,
    currentUserId: state.currentUser.id,
    currentUserAvatar: state.currentUser.avatar,
    cover: state.currentGameList.img
})

const mapDispatchToProps = dispatch => ({
    queryGameList(id) {
        dispatch(
            queryGameListByIdAction(id)
        )
    },
    addGameListReview({id, userId, rate, content}) {
        dispatch(
            addGameListReviewAction(userId, rate, content, id)
        )
    },
    removeGameFromGameList(id) {
        dispatch(
            removeGameFromGameListAction(id)
        )
    }
})


const Container = connect(mapStateToProps, mapDispatchToProps)(GameListDetail)

export default withRouter(Container)