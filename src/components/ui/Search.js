import { Component } from 'react'
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import muiTheme from '../MuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Tabs, Tab } from 'material-ui/Tabs'
import SwipeableViews from 'react-swipeable-views'
import SearchGameLists from './SearchGameLists'
import SearchGames from './SearchGames'
import '../../css/components/Search.scss'
import queryString from 'query-string'
import { search } from '../../store/actions'
import '../../css/components/Search.scss'


const Search = ({ games=[], gameLists=[], searchGame=f=>f, searchGameList=f=>f, location }) => {

    const parsed = queryString.parse(location.search)
    const searchName = parsed.name
    console.log(searchName)

    return (
        <MuiThemeProvider muiTheme={muiTheme}>
            <Tabs>
                <Tab label="Game Lists">
                    <SearchGameLists gameLists={gameLists} searchName={searchName} searchGameList={searchGameList} />
                </Tab>
                <Tab label="Games">
                    <SearchGames games={games} searchName={searchName} searchGame={searchGame}/>
                </Tab>
            </Tabs>
        </MuiThemeProvider>
    )
}

export default Search