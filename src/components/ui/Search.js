import { Component } from 'react'
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import muiTheme from '../MuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Tabs, Tab } from 'material-ui/Tabs'
import SwipeableViews from 'react-swipeable-views'
import SearchGameLists from './SearchGameLists'
import SearchGames from './SearchGames'

/*export default class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            slideIndex: 0
        }
        this.handleSlide = this.handleSlide.bind(this)
    }

    handleSlide = value => {
        this.setState({
            slideIndex: value
        })
    }

    render() {
        return (
            
            <MuiThemeProvider muiTheme={muiTheme}>
                <div>
                <Tabs onChange={this.handleSlide} value={this.state.slideIndex}>
                    <Tab label="Game Lists" value={0}/>
                    <Tab label="Games" value={1}/>
                </Tabs>
                <SwipeableViews index={this.state.slideIndex} onChangeIndex={this.handleSlide}>
                    <div>
                        <SearchGameLists/>
                    </div>
                    <div>
                        <SearchGames/>
                    </div>
                </SwipeableViews>
                </div>
            </MuiThemeProvider>
            
        )
    }
}*/

const Search = () => {
    return (
        <MuiThemeProvider muiTheme={muiTheme}>
            <Tabs>
                <Tab label="Game Lists">
                    <SearchGameLists/>
                </Tab>
                <Tab label="Games">
                    <SearchGames/>
                </Tab>
            </Tabs>
        </MuiThemeProvider>
    )
}
export default Search