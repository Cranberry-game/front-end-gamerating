import { Component } from 'react'
import muiTheme from '../MuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import Chip from 'material-ui/Chip'
import AutoComplete from 'material-ui/AutoComplete'
import Dropzone from 'react-dropzone'
import '../../css/components/AddGameList.scss'
import 'react-dropzone-component/styles/filepicker.css'
import 'dropzone/dist/min/dropzone.min.css'

class AddGameList extends Component {
    constructor(props){
        super(props)
        this.state = {
            gameSuggestionText: ''
        }
        this._name = ''
        this._description = ''
        this._gameName=''

    }

    handleAddGameList = () => {

        const { addGameList=f=>f, userId=0, games=[], gamelistCover='' } = this.props
        addGameList({
            name: this._name,
            userId: userId,
            description: this._description,
            img: gamelistCover,
            games: games.map(game => game.gameId)
        })
    }

    handleUpdateInput = input => {
        const { queryGameByPrefix=f=>f } = this.props
        this.setState({
            gameSuggestionText: input
        })
        queryGameByPrefix(input)
    }

    handleEnter = input => {

        const { gameSuggestions=[], addGameToAddGamelistByFullname=f=>f } = this.props

        this.setState({
            gameSuggestionText: ''
        })
        if (!gameSuggestions.some((cur, index, array) => cur === input)) {
            if (gameSuggestions.length === 0) {
                input = ""
            }
            else {
                input = gameSuggestions[0]
            }
        }

        if (input.length !== 0) {
            addGameToAddGamelistByFullname(input)
        }
    }

    handleDeleteGame = gameId => {
        const { deleteGameFromAddGamelist=f=>f, games=[] } = this.props
        deleteGameFromAddGamelist(gameId)
    }

    handleCoverDropped = acceptedFiles => {
        const { uploadCover=f=>f } = this.props
        uploadCover(acceptedFiles)
    }

    render() {

        const { hasUploadedGamelistCover=false, games=[], gameSuggestions=[], gamelistCover='' } = this.props

        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div className='add-game-list-wrapper'>
                    {(hasUploadedGamelistCover)?
                        <div className='upload-gamelist-cover'>
                            <img src={gamelistCover} alt='Cover' />
                        </div>:
                        <div className='add-gamelist-cover-wrapper'>
                            <Dropzone onDrop={this.handleCoverDropped} multiple={false}>
                                <div>Try dropping some files here, or click to select files to upload.</div>
                            </Dropzone>
                        </div>
                    }
                    <div className='add-game-list-name-wrapper'>
                    <TextField hintText="Game List Name" onChange={(e, input) => this._name=input}/><br />
                    </div>
                    <div className="add-game-list-desc-wrapper">
                    <TextField hintText="Game List Description" onChange={(e, input) => this._description=input}/><br />
                    </div>
                    <div className='add-gamelist-games-wrapper'>
                        {games.map(game => 
                            <Chip key={game.gameId}
                                  onRequestDelete={() => this.handleDeleteGame(game.gameId)}>
                                  {game.gameTitle}
                            </Chip>
                            )
                        }
                    </div>
                    <div className='add-game-list-games-wrapper'>
                        <AutoComplete searchText={this.state.gameSuggestionText} dataSource={gameSuggestions} onUpdateInput={this.handleUpdateInput} onNewRequest={this.handleEnter}/>
                    </div>
                    <div className="add-game-list-button-wrapper">
                    <RaisedButton label="Add GameList" primary={true} onTouchTap={this.handleAddGameList}/>
                    </div>
                </div>
            </MuiThemeProvider>
        )
    }
}

export default AddGameList