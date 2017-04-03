import { Component } from 'react'
import muiTheme from '../MuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import DatePicker from 'material-ui/DatePicker'
import DropzoneComponent from 'react-dropzone-component'
import 'react-dropzone-component/styles/filepicker.css'
import 'dropzone/dist/min/dropzone.min.css'
import '../../css/components/AddGame.scss';

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

    handleDropScreenshots = (files) => {
        console.log('Received files: ', files)
    }

    handleAddGame = () => {

        const { addGame=f=>f } = this.props
        
        addGame({
            title: this._name,
            gameType: this.state.gameTypeValue,
            price: this._price,
            releaseCompany: this._releaseCompany,
            releaseDate: `${this._date.getUTCFullYear()}-${this._date.getUTCMonth()+1}-${this._date.getUTCDate()}`,
            studio: this._studio,
            platform: this.state.platformValues,
            cover: "http://img.dota2.com.cn/maps/c3/44/c34412ad9921e6def2481c52bd19c34f1489982255.jpg",
            description: this._description,
            screenshot: ["http://img.dota2.com.cn/maps/c3/44/c34412ad9921e6def2481c52bd19c34f1489982255.jpg"]
        })
        // console.log(this._name, this._description, this._price, this._releaseCompany, this._studio, this.state.gameTypeValue, this.state.platformValues, this._date.getUTCMonth())
    }

    handleFileAdded(file) {
        const { uploadCover } = this.props
        console.log(file.getAsDataURL)
        uploadCover(file)
    }

    render() {

        const {  } = this.props
        
        const uploadEventHandlers = {
            addedfile: this.handleFileAdded.bind(this)
        }

        return(
            <div>
                <MuiThemeProvider muiTheme={muiTheme}>
                    <div className='add-game-wrapper'>
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
                        <div className='add-screenshots-wrapper'>
                            <DropzoneComponent config={uploadComponentConfig} djsConfig={uploadDjsConfig} eventHandlers={uploadEventHandlers}/>
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