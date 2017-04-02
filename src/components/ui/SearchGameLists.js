import { Component } from 'react'
import muiTheme from '../MuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import LinearProgress from 'material-ui/LinearProgress'
import CircularProgress from 'material-ui/CircularProgress'
import SearchGameListItems from './SearchGameListItems'
import '../../css/components/SearchGameLists.scss'


class SearchGameLists extends Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        const { searchGameList=f=>f, searchName="" } = this.props

        searchGameList(searchName)
    }

    render() {
        const { gameLists=[] } = this.props

        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <LinearProgress mode="indeterminate"/>
            </MuiThemeProvider>,
            <div className="search-gamelist-container">
                {gameLists.map((gameList) => (
                    <SearchGameListItems key={gameList.id} gamelistId={gameList.id} gameListCover={gameList.img} creatorId={gameList.creator.userId} creatorName={gameList.creator.name} creatorAvatar={gameList.creator.avatar} gameListName={gameList.gameListName} gameListCover={gameList.img} gameListDescription={gameList.description}/>
                ))}
            </div>
        )
    }

}

export default SearchGameLists