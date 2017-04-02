import AddGame from '../ui/AddGame'
import { connect } from 'react-redux'
import { addGameAction, uploadCoverAction } from '../../store/actions'
import { withRouter } from 'react-router-dom'

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
    addGame({ title, gameType, price, releaseCompany, releaseDate, studio, platform, cover, description, screenshot }) {
        console.log(title, gameType, price, releaseCompany, releaseDate, studio, platform, cover, description, screenshot)
        dispatch(
            addGameAction(title, gameType, price, releaseCompany, releaseDate, studio, platform, cover, description, screenshot)
        )
    },
    uploadCover(file) {
        dispatch(
            uploadCoverAction(file)
        )
    }
})


export default connect(mapStateToProps ,mapDispatchToProps)(AddGame)