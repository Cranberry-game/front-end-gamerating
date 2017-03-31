import muiTheme from '../MuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import { Link } from 'react-router-dom'
import '../../css/components/SearchGameListItems.scss'


const SearchGameListItems = ({ gamelistId=0 }) => (
    <div className='search-gamelist-item-wrapper'>
        <Link to={`/gamelist/${gamelistId}`}>
            <MuiThemeProvider muiTheme={muiTheme}>
                <Card>
                    <CardHeader title="wang ye" subtitle="senior gamer" avatar="http://i1.kym-cdn.com/entries/icons/facebook/000/007/217/Potatoe.jpg"/>
                    <CardMedia overlay={<CardTitle title="Best Games" subtitle="Best Game" />} >
                        <div className='search-gamelist-item-img-container'>
                            <img src="http://i1.kym-cdn.com/entries/icons/facebook/000/007/217/Potatoe.jpg"/>
                        </div>
                    </CardMedia>
                </Card>
            </MuiThemeProvider>
        </Link>
    </div>
)

export default SearchGameListItems