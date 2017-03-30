import { Component } from 'react'
import muiTheme from '../MuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import LinearProgress from 'material-ui/LinearProgress'
import CircularProgress from 'material-ui/CircularProgress'
import SearchGameItems from './SearchGameItems'

class SearchGames extends Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        const { searchGame, searchName } = this.props

        console.log(searchName)
        searchGame(searchName)
    }

    render() {

        const { games=[] } = this.props

        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <LinearProgress mode="indeterminate"/>
            </MuiThemeProvider>,
            <h1>SearchGames</h1>,
            <div className="search-game-container">
                {games.map((game, i) => 
                    <SearchGameItems key={game.id} gameTitle={game.title} gameId={game.id}/>
                )}
            </div>
        )
    }
}

export default SearchGames