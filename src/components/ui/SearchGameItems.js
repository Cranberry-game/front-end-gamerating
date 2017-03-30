import muiTheme from '../MuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card'
import { Link } from 'react-router-dom'

const SearchGameListItems = ({ gameTitle="", gameId=0 }) => (
    <Link to={`/game/${gameId}`}>
        <MuiThemeProvider muiTheme={muiTheme}>
            <Card>
                <CardMedia overlay={<CardTitle title={gameTitle} subtitle="Best Game"/>}>
                    <img src="https://i.ytimg.com/vi/xwVEfcKNThY/maxresdefault.jpg"/>
                </CardMedia>
            </Card>
        </MuiThemeProvider>
    </Link>
)

export default SearchGameListItems