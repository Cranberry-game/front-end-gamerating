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

        const { id=0, currentUserId=0, currentUserAvatar='', gamelistName='', gameListDescription='', createTimeStamp=0, updateTimeStamp=0, games=[], reviews=[], addGameListReview=f=>f, cover='' } = this.props

        return (
            <div className="game-list-detail">
                <StoryBar title={gamelistName} description={gameListDescription} imgSource={cover} />
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
                    <CommentSend addReview={addGameListReview} currentUserId={currentUserId} currentUserAvatar={currentUserAvatar} id={id}/>
                </div>
                <div className='comment-list-container'>
                    <Comments comments={reviews}/>
                </div>
            </div>
        )
    }
}

export default GameListDetail