import GameDetail from '../ui/GameDetail'
import { connect } from 'react-redux'
import { queryGameById, addGameReviewAction } from '../../store/actions'
import { withRouter } from 'react-router-dom'

const mapStateToProps = state => ({
    id: state.currentGame.id,
    title: state.currentGame.title,
    description: state.currentGame.description,
    platforms: state.currentGame.platforms,
    gameType: state.currentGame.gameType,
    studio: state.currentGame.studio,
    price: state.currentGame.price,
    totalRating: state.currentGame.totalRating,
    releaseCompany: state.currentGame.releaseCompany,
    releaseDate: state.currentGame.releaseDate,
    reviews: state.currentGame.reviews,
    createAt: state.currentGame.createAt,
    updateAt: state.currentGame.updateAt,
    screenshots: state.currentGame.screenshots,
    cover: state.currentGame.cover,
    currentUserId: state.currentUser.id,
    currentUserAvatar: state.currentUser.avatar
})

const mapDispatchToProps = dispatch => ({
    queryGame(id) {
        dispatch(
            queryGameById(id)
        )
    },
    addGameReview({id, userId, rate, content}) {
        dispatch(
            addGameReviewAction(userId, rate, content, id)
        )
    }
})


const Container = connect(mapStateToProps, mapDispatchToProps)(GameDetail)

export default withRouter(Container)