import { Component } from 'react'
import '../../css/components/GameListItem.scss'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
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
        return(
            <div className='mouse-enter-or-out-wrapper' onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
                <div className='gamelistitem-container'>
                        <div className="delete-game-button-container">
                        {(this.state.hover)?
                        <MuiThemeProvider muiTheme={muiTheme}>
                            <FloatingActionButton>
                                <ContentAdd />
                            </FloatingActionButton>
                        </MuiThemeProvider>
                        :null}
                    </div>

                    <div className='gamelistitem-img-container'>
                        <img src='http://img05.tooopen.com/images/20160121/tooopen_sy_155168162826.jpg' alt='gamecover' />
                    </div>
                    <div className='gamelistitem-img-cover'></div>
                    <div className='gamelistitem-img-header-container'>
                        <h3 className='gamelistitem-img-title'>game title</h3>
                        <p className='gamelistitem-img-desc'>game desc</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default GameListItem