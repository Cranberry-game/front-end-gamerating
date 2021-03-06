import { Component } from 'react'
import '../../css/components/GameListItem.scss'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import RaisedButton from 'material-ui/RaisedButton'
import ContentCancel from 'material-ui/svg-icons/action/delete'
import muiTheme from '../MuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Paper from 'material-ui/Paper'
import { Link } from 'react-router-dom'


class GameListItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hover: false
        }
    }

    mouseOver = e => {
        e.preventDefault()
        this.setState({
            hover: true
        })
    }

    mouseOut = e => {
        e.preventDefault()
        this.setState({
            hover: false
        })
    }

    handleRemoveGameFromGameList = e => {
        e.preventDefault()
        const { gameId=0, removeGameFromGameList=f=>f, id=0 } = this.props
        removeGameFromGameList({
            gameId: gameId,
            gameListId: id
        })
    }

    render() {

        const { gamecover='', gametitle='', gamedesc='', gameId=0 } = this.props

        return(
            <div className='mouse-enter-or-out-wrapper' onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
                <div className='gamelistitem-container'>
                        <div className="delete-game-button-container">
                        {/*{(this.state.hover)?*/}
                        <MuiThemeProvider muiTheme={muiTheme}>
                            <FloatingActionButton zDepth={3} onTouchTap={this.handleRemoveGameFromGameList}>
                                <ContentCancel/>
                            </FloatingActionButton>
                        </MuiThemeProvider>
                        {/*:null}*/}
                    </div>

                    <MuiThemeProvider muiTheme={muiTheme}>
                        <Link to={`/game/${gameId}`}>
                            <Paper zDepth={5}>
                                <div className='gamelistitem-img-container'>
                                    <img src={gamecover} alt='gamecover' />
                                </div>
                                <div className='gamelistitem-img-cover'></div>
                                <div className='gamelistitem-img-header-container'>
                                    <h3 className='gamelistitem-img-title'>{gametitle}</h3>
                                    <p className='gamelistitem-img-desc'>{gamedesc}</p>
                                </div>
                            </Paper>
                        </Link>
                    </MuiThemeProvider>
                </div>
            </div>
        )
    }
}

export default GameListItem