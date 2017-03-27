import muiTheme from '../MuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
// import '../../css/components/_GameListDetail.scss'
import StoryBar from './StoryBar'
import GameListShow from './GameListShow'
import Comments from './Comments'
import CommentSend from './CommentSend'
import GameListList from './GameListList'

const GameListDetail = ({gameListName="Halo", gameListDescription="lalal"}) => {
    return (
        <div className="game-list-detail">
            <StoryBar/>
            <div className='game-info'>
                <div className='gamelist-name-container'>
                    <h3 className='gamelist-name'>{gameListName}</h3>
                </div>
                <div className='gamelist-desc'>
                    <h2 className='gamelist-desc'>{gameListDescription}</h2>
                </div>
            </div>
            <div className='gamelistlist-wrapper'>
                <GameListList/>
            </div>
            <div className='comment-send-container'>
                <CommentSend/>
            </div>
            <div className='comment-list-container'>
                <Comments/>
            </div>
        </div>
    )
}

export default GameListDetail