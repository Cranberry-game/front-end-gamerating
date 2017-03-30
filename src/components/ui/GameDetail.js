import { Component } from 'react'
import muiTheme from '../MuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
// import '../../css/components/_GameListDetail.scss'
import StoryBar from './StoryBar'
import GameListShow from './GameListShow'
import Comments from './Comments'
import CommentSend from './CommentSend'
import GameListList from './GameListList'

class GameDetail extends Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {

        const { location=null, match=null, queryGame=f=>f } = this.props
        queryGame(match.params.gameId)
        console.log(match.params.gameId)
    }

    render() {

        const {title="", gameDescription="", releaseDate="", gameRate=0, cover="", } = this.props

        return (
            <div className="game-detail">
                <StoryBar title={title} description={gameDescription} time={releaseDate}/>
                <div className='game-info'>
                    <div className='game-name-container'>
                        <h3 className='game-name'>{title}</h3>
                    </div>
                    <div className='game-desc'>
                        <h2 className='game-desc'>{gameDescription}</h2>
                    </div>
                    <div className='relase-time-container'>
                        <p className='release-time'>{releaseDate}</p>
                    </div>
                    <div className='game-rate-container'>
                        <p className='game-rate'>{`${gameRate} / 10`}</p>
                    </div>
                </div>
                <div className='game-show'>
                    <GameListShow/>
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
}

export default GameDetail