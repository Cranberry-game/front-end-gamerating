import muiTheme from '../MuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card'
import { Link } from 'react-router-dom'

const SearchGameItems = ({ gameTitle="", gameId=0 }) => (
    <div className='search-game-item-wrapper'>
        <Link to={`/game/${gameId}`}>
            <MuiThemeProvider muiTheme={muiTheme}>
                <Card>
                    <CardMedia overlay={<CardTitle title={gameTitle} subtitle="Best Game"/>}>
                        <div className='search-game--item-img-container'>
                            <img src="https://i.ytimg.com/vi/xwVEfcKNThY/maxresdefault.jpg"/>
                        </div>
                    </CardMedia>
                </Card>
            </MuiThemeProvider>
        </Link>
    </div>
)

export default SearchGameItems