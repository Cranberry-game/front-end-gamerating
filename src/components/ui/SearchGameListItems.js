import muiTheme from '../MuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

const SearchGameListItems = () => (
    <MuiThemeProvider muiTheme={muiTheme}>
        <Card>
            <CardHeader title="wang ye" subtitle="senior gamer" avatar="http://i1.kym-cdn.com/entries/icons/facebook/000/007/217/Potatoe.jpg"/>
            <CardMedia overlay={<CardTitle title="Best Games" subtitle="Best Game"/>}>
                <img src="http://i1.kym-cdn.com/entries/icons/facebook/000/007/217/Potatoe.jpg"/>
            </CardMedia>
        </Card>
    </MuiThemeProvider>
)

export default SearchGameListItems