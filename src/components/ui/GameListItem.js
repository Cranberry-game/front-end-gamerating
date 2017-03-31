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
                    <div className='gamelistitem-img-container'>
                        <img src='http://p7.qhimg.com/t014033e9e74792bdec.jpg' alt='gamecover' />
                    </div>
                    <div className='gamelistitem-img-cover'></div>
                    <div className='gamelistitem-img-header-container'>
                        <h3 className='gamelistitem-img-title'>game title</h3>
                        <p className='gamelistitem-img-desc'>game desc</p>
                    </div>
                    {(this.state.hover)?
                    <MuiThemeProvider muiTheme={muiTheme}>
                        <FloatingActionButton>
                            <ContentAdd />
                        </FloatingActionButton>
                    </MuiThemeProvider>
                    :null}
                </div>
            </div>
        )
    }
}

export default GameListItem