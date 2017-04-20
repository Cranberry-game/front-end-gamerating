import { Component } from 'react'
import muiTheme from '../MuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import DatePicker from 'material-ui/DatePicker'
import {GridList, GridTile} from 'material-ui/GridList'
import IconButton from 'material-ui/IconButton'
import StarBorder from 'material-ui/svg-icons/toggle/star-border'
import Dropzone from 'react-dropzone'
import request from 'superagent'
import fetch from 'isomorphic-fetch'
import FormData from 'form-data'
import 'react-dropzone-component/styles/filepicker.css'
import 'dropzone/dist/min/dropzone.min.css'
import '../../css/components/AddGame.scss'

const gameTypes = [
    'FPS',
    'RPG'
]

const platforms = [
    'Xbox One',
    'Xbox 360',
    'PS3',
    'Mobile', 
    'Vita', 
    'PS4', 
    'Nintendo Switch', 
    'Wii U', 
    'PC'
]

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    gridList: {
        display: 'flex',
        flexWrap: 'nowrap',
        overflowX: 'auto',
    },
    titleStyle: {
        color: 'rgb(0, 188, 212)',
    },
}

const uploadComponentConfig = {
    iconFiletypes: ['.jpg', '.png', '.gif'],
    showFiletypeIcon: true,
    postUrl: 'no-url'
}

const uploadDjsConfig = {
    addRemoveLinks: true,
    acceptedFiles: "image/jpeg,image/png,image/gif",
    autoProcessQueue: false
}

class AddGame extends Component {
    constructor(props) {
        super(props)
        this.state = {
            gameTypeValue: '',
            platformValues: []
        }
        this._name = '', 
        this._description = '',
        this._price = '',
        this._releaseCompany = '',
        this._studio = '',
        this._date = new Date()
    }

    handleSetGameType = (event, index, value) => {
        this.setState({
            gameTypeValue: value
        })
    }

    handleSetPlatform = (event, index, values) => {
        this.setState({
            platformValues: values
        })
    }

    handleAddGame = () => {

        const { addGame=f=>f, uploadCover=f=>f, gameCover='', gameScreenshots=[] } = this.props
        addGame({
            title: this._name,
            gameType: this.state.gameTypeValue,
            price: this._price,
            releaseCompany: this._releaseCompany,
            releaseDate: `${this._date.getUTCFullYear()}-${this._date.getUTCMonth()+1}-${this._date.getUTCDate()}`,
            studio: this._studio,
            platform: this.state.platformValues,
            cover: gameCover,
            description: this._description,
            screenshot: gameScreenshots
        })
    }

    handleCoverDropped = acceptedFiles => {
        const { uploadCover=f=>f } = this.props
        uploadCover(acceptedFiles)
    }

    handleScreenshotsDropped = acceptedFiles => {
        const { uploadScreenShots=f=>f } = this.props
        uploadScreenShots(acceptedFiles)
    }

    render() {

        const { hasUploadedGameCover=false, gameCover="", gameScreenshots=[] } = this.props

        return(
            <div>
                <MuiThemeProvider muiTheme={muiTheme}>
                    <div className='add-game-wrapper'>
                        {(hasUploadedGameCover)?
                            <div className='upload-game-cover'>
                                <img src={gameCover} alt='Cover' />
                            </div>:
                            <div className='add-cover-wrapper'>
                                <Dropzone onDrop={this.handleCoverDropped} multiple={false}>
                                    <div>Try dropping some files here, or click to select files to upload.</div>
                                </Dropzone>
                            </div>
                        }
                        <div className='add-game-name-wrapper'>
                            <TextField hintText="Game Name" onChange={(event,input) => this._name=input} fullWidth={true}/><br />
                        </div>
                        <div className="add-game-desc-wrapper">
                            <TextField hintText="Game Description" onChange={(event, input) => this._description=input} fullWidth={true}/><br />
                        </div>
                        <div className="add-game-price-wrapper">
                            <TextField hintText="Game Price" onChange={(event, input) => this._price=input} fullWidth={true}/><br />
                        </div>
                        <div className="add-game-release-company-wrapper">
                            <TextField hintText="Release Company" onChange={(event, input) => this._releaseCompany=input} fullWidth={true}/><br />
                        </div>
                        <div className="add-game-studio-wrapper">
                            <TextField hintText="Studio" onChange={(event, input) => this._studio=input} fullWidth={true}/><br />
                        </div>
                        <div className='add-game-type-wrapper'>
                            <SelectField hintText="Select the Game Type" value={this.state.gameTypeValue} maxHeight={200} onChange={this.handleSetGameType} fullWidth={true}>
                                {gameTypes.map(gameType => <MenuItem value={gameType} key={gameType} primaryText={gameType}/>)}
                            </SelectField>
                        </div>
                        <div className='add-platforms-wrapper'>
                            <SelectField multiple={true} hintText="Select Platform of the Game" value={this.state.platformValues} maxHeight={200} onChange={this.handleSetPlatform} fullWidth={true}>
                                {platforms.map(platform => <MenuItem value={platform} key={platform} primaryText={platform} checked={this.state.platformValues && this.state.platformValues.includes(platform)} insetChildren={true} />)}
                            </SelectField>
                        </div>
                        <div className='add-game-release-time'>
                            <DatePicker hintText="Release Date" onChange={(event, input) => this._date = input} fullWidth={true}/>
                        </div>
                        <div className='game-screenshots-wrapper'>
                            <div style={styles.root}>
                                <GridList style={styles.gridList} cols={2.2}>
                                {gameScreenshots.map((gameScreenshot, i) => (
                                    <GridTile key={i}>
                                    <img src={gameScreenshot} />
                                    </GridTile>
                                ))}
                                </GridList>
                            </div>
                        </div>
                        <div className='add-screenshots-wrapper'>
                            <Dropzone onDrop={this.handleScreenshotsDropped} multiple={true}>
                                <div>Try dropping some files here, or click to select files to upload.</div>
                            </Dropzone>
                        </div>
                        <div className="add-game-button-wrapper">
                            <RaisedButton label="Add Game" primary={true} onTouchTap={this.handleAddGame} fullWidth={true}/>
                        </div>
                    </div>
                </MuiThemeProvider>
            </div>
        )
    }

}

export default AddGame