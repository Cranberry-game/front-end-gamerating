import { Component } from 'react'
import '../../css/components/GameListItem.scss'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentCancel from 'material-ui/svg-icons/action/delete'
import muiTheme from '../MuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'


class GameListItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hover: false
        }
    }

    mouseOver = () => {
        this.setState({
            hover: true
        })
    }

    mouseOut = () => {
        this.setState({
            hover: false
        })
    }

    render() {

        const { gamecover='', gametitle='', gamedesc='' } = this.props

        return(
            <div className='mouse-enter-or-out-wrapper' onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
                <div className='gamelistitem-container'>
                        <div className="delete-game-button-container">
                        {(this.state.hover)?
                        <MuiThemeProvider muiTheme={muiTheme}>
                            <FloatingActionButton>
                                <ContentCancel />
                            </FloatingActionButton>
                        </MuiThemeProvider>
                        :null}
                    </div>

                    <div className='gamelistitem-img-container'>
                        <img src={gamecover} alt='gamecover' />
                    </div>
                    <div className='gamelistitem-img-cover'></div>
                    <div className='gamelistitem-img-header-container'>
                        <h3 className='gamelistitem-img-title'>{gametitle}</h3>
                        <p className='gamelistitem-img-desc'>{gamedesc}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default GameListItem