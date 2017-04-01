import { Component } from 'react'
import muiTheme from '../MuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
// import '../../css/components/_GameListDetail.scss'
import StoryBar from './StoryBar'
import GameListShow from './GameListShow'
import Comments from './Comments'
import CommentSend from './CommentSend'
import GameListList from './GameListList'


class GameListDetail extends Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {

        const { location=null, match=null, queryGameList=f=>f } = this.props
        queryGameList(match.params.listId)
        console.log(match.params.listId)
    }


    render() {

        const { gamelistName='', gameListDescription='', createTimeStamp=0, updateTimeStamp=0, games=[] } = this.props

        return (
            <div className="game-list-detail">
                <StoryBar title={gamelistName} description={gameListDescription} />
                {/*<div className='game-info'>
                    <div className='gamelist-name-container'>
                        <h3 className='gamelist-name'>{gameListName}</h3>
                    </div>
                    <div className='gamelist-desc'>
                        <h2 className='gamelist-desc'>{gameListDescription}</h2>
                    </div>
                </div>*/}
                <div className='gamelistlist-wrapper'>
                    <GameListList games={games}/>
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

export default GameListDetail