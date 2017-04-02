import { Component } from 'react'
import muiTheme from '../MuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton'
import Popover, {PopoverAnimationVertical} from 'material-ui/Popover'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table'
import Menu from 'material-ui/Menu'
import MenuItem from 'material-ui/MenuItem'
import Chip from 'material-ui/Chip'
// import '../../css/components/_GameListDetail.scss'
import StoryBar from './StoryBar'
import GameListShow from './GameListShow'
import Comments from './Comments'
import CommentSend from './CommentSend'
import GameListList from './GameListList'
import '../../css/components/GameDetail.scss'
import ImageGallery from 'react-image-gallery'
import "react-image-gallery/styles/css/image-gallery.css"

const arrays = [
    {
        id: 1,
        name: "first"
    },
    {
        id: 2,
        name: "second"
    }
]

const styles = {
    chip: {
        margin: 4,
    },
    wrapper: {
        display: 'flex',
        flexWrap: 'wrap',
    },
}

class GameDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false
        }
    }

    handleTouchAddToList = e => {
        e.preventDefault()
        this.setState({
            open: true,
            anchorEl: e.currentTarget
        })
    }

    handleRequestClose = () => {
        this.setState({
            open: false
        })
    }

    handleAddToListSelected = (id) => {
        console.log(id)
    }

    componentWillMount() {

        const { location=null, match=null, queryGame=f=>f } = this.props
        queryGame(match.params.gameId)
        console.log(match.params.gameId)
    }

    render() {

        const { id=0, title="", description="", platforms=[], gameType="", studio="", price="", totalRating=0, releaseDate="", releaseCompany="", reviews=[], createAt=0, updateAt=0, screenshots=[], cover="", currentUserId=0, currentUserAvatar="", addGameReview=f=>f } = this.props

        console.log(screenshots.map(screenshot => ({original: screenshot})))

        return (
            <div className="game-details-wrapper">
                <StoryBar title={title} description={description} time={releaseDate} imgSource={cover}/>
                <div className='game-info'>
                    <p className='game-details'>
                        Details
                    </p>
                    <div className='game-detail-container'>
                        <span className='game-detail-name'>{'User Rate: '}</span>
                        <span className='game-detail'>{`${totalRating} / 10`}</span>
                    </div>
                    <div className='game-detail-container'>
                        <span className='game-detail-name'>{'Game Type: '}</span>
                        <span className='game-detail'>{gameType}</span>
                    </div>
                    <div className='game-detail-container'>
                        <span className='game-detail-name'>{'Studio: '}</span>
                        <span className='game-detail'>{studio}</span>
                    </div>
                    <div className='game-detail-container'>
                        <span className='game-detail-name'>{'Price: '}</span>
                        <span className='game-detail'>{price}</span>
                    </div>
                    <div className='game-detail-container'>
                        <span className='game-detail-name'>{'Release Company: '}</span>
                        <span className='game-detail'>{releaseCompany}</span>
                    </div>
                    <div className='game-platform-container'>
                        <MuiThemeProvider muiTheme={muiTheme}>
                            <div style={styles.wrapper}>
                                {platforms.map((platform, i) => 
                                    <Chip style={styles.chip} key={i}>
                                        {platform.platformName}
                                    </Chip>
                                )}
                            </div>
                        </MuiThemeProvider>
                    </div>
                </div>          
                <MuiThemeProvider muiTheme={muiTheme}>
                    <div className='add-to-list-button-container'>
                        <RaisedButton onTouchTap={this.handleTouchAddToList} label="Add to Game List"/>
                        <Popover open={this.state.open} anchorEl={this.state.anchorEl} anchorOrigin={{horizontal: 'left', vertical: 'bottom'}} targetOrigin={{horizontal: 'left', vertical: 'top'}} onRequestClose={this.handleRequestClose} animation={PopoverAnimationVertical}>
                            <Menu>
                                {arrays.map(array => <MenuItem key={array.id} primaryText={array.name} onTouchTap={() => this.handleAddToListSelected(array.id)}/>)}
                            </Menu>
                        </Popover>
                    </div>
                </MuiThemeProvider>
                <ImageGallery items={screenshots.map(screenshot => ({original: screenshot.img}))} autoPlay={true} showThumbnails={false} slideInterval={5000} lazyLoad={true} />
                {/*<div className='game-show'>
                    <GameListShow screenshots={screenshots}/>
                </div>*/}
                <div className='comment-send-container'>
                    <CommentSend addReview={addGameReview} currentUserId={currentUserId} currentUserAvatar={currentUserAvatar} id={id}/>
                </div>
                <div className='comment-list-container'>
                    <Comments comments={reviews}/>
                </div>
            </div>
        )
    }
}

export default GameDetail