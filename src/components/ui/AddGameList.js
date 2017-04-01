import muiTheme from '../MuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'

const AddGameList = ({ addGameList=f=>f, _games=[] }) => {

    let _name = 'addgamelisttest', _description = 'addgamelisttest'

    const handleAddGameList = () => {
        addGameList({
            name: _name,
            userId: 1,
            description: _description,
            img: "http://img1.joyreactor.cc/pics/post/full/Kemono-Friends-Anime-Serval-(Kemono-Friends)-Kaban-3710791.jpeg",
            games: _games.map(game => game.id)
        })
    }

    return (
        <MuiThemeProvider muiTheme={muiTheme}>
            <div className='add-game-list-wrapper'>
                <div className='add-game-list-name-wrapper'>
                <TextField hintText="Game List Name" onChange={input => _name=input}/><br />
                </div>
                <TextField hintText="Game List Description" onChange={input => _description=input}/><br />
                <RaisedButton label="Add GameList" primary={true} onTouchTap={handleAddGameList}/>
            </div>
        </MuiThemeProvider>
    )
}

export default AddGameList