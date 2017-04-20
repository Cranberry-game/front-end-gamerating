import AddGame from '../ui/AddGame'
import { connect } from 'react-redux'
import { addGameAction, uploadGameCoverAction, uploadGameScreenShotsAction } from '../../store/actions'
import { withRouter } from 'react-router-dom'

const mapStateToProps = state => ({
    token: state.currentUser.token,
    gameCover: state.uploadFiles.gameCover,
    gameScreenshots: state.uploadFiles.gameScreenshots,
    hasUploadedGameCover: state.uploadFiles.hasUploadedGameCover

})

const mapDispatchToProps = dispatch => ({
    addGame({ title, gameType, price, releaseCompany, releaseDate, studio, platform, cover, description, screenshot }) {
        console.log(title, gameType, price, releaseCompany, releaseDate, studio, platform, cover, description, screenshot)
        dispatch(
            addGameAction(title, gameType, price, releaseCompany, releaseDate, studio, platform, cover, description, screenshot)
        )
    },
    uploadCover(acceptedFiles) {
        dispatch(
            uploadGameCoverAction(acceptedFiles)
        )
    },
    uploadScreenShots(acceptedFiles) {
        dispatch(
            uploadGameScreenShotsAction(acceptedFiles)
        )
    }
})


export default connect(mapStateToProps ,mapDispatchToProps)(AddGame)