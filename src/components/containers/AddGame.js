import AddGame from '../ui/AddGame'
import { connect } from 'react-redux'
import { addGameAction, uploadCoverAction, uploadScreenShotsAction } from '../../store/actions'
import { withRouter } from 'react-router-dom'

const mapStateToProps = state => ({
    token: state.currentUser.token
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
            uploadCoverAction(acceptedFiles)
        )
    },
    uploadScreenShots(acceptedFiles) {
        dispatch(
            uploadScreenShotsAction(acceptedFiles)
        )
    }
})


export default connect(mapStateToProps ,mapDispatchToProps)(AddGame)