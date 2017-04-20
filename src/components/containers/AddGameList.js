import AddGameList from '../ui/AddGameList'
import { connect } from 'react-redux'
import { addGameListAction, queryGameByPrefixAction, addGameToAddGamelistByFullnameAction, deleteGameFromAddGamelistAction, uploadGamelistCoverAction } from '../../store/actions'
import { withRouter } from 'react-router-dom'

const mapStateToProps = state => ({
    gameSuggestions: state.addGameList.suggestions,
    games: state.addGameList.games,
    userId: state.currentUser.id,
    gamelistCover: state.uploadFiles.gamelistCover,
    hasUploadedGamelistCover: state.uploadFiles.hasUploadedGamelistCover
})

const mapDispatchToProps = dispatch => ({
    addGameList({ name, userId, description, img, games }) {
        dispatch(
            addGameListAction(name, userId, description, img, games)
        )
    },
    queryGameByPrefix(prefix) {
        dispatch(
            queryGameByPrefixAction(prefix)
        )
    },
    addGameToAddGamelistByFullname(fullname) {
        console.log(fullname)
        dispatch(
            addGameToAddGamelistByFullnameAction(fullname)
        )
    },
    deleteGameFromAddGamelist(id) {
        dispatch(
            deleteGameFromAddGamelistAction(id)
        )
    },
    uploadCover(acceptedFiles) {
        dispatch(
            uploadGamelistCoverAction(acceptedFiles)
        )
    }
})


export default connect(mapStateToProps ,mapDispatchToProps)(AddGameList)

