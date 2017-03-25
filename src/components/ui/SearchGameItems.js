import muiTheme from '../MuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

const SearchGameListItems = () => (
    <MuiThemeProvider muiTheme={muiTheme}>
        <Card>
            <CardHeader title="wang ye" subtitle="senior gamer" avatar="https://i.ytimg.com/vi/xwVEfcKNThY/maxresdefault.jpg"/>
            <CardMedia overlay={<CardTitle title="Best Games" subtitle="Best Game"/>}>
                <img src="https://i.ytimg.com/vi/xwVEfcKNThY/maxresdefault.jpg"/>
            </CardMedia>
        </Card>
    </MuiThemeProvider>
)

export default SearchGameListItems