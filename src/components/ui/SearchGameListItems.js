import muiTheme from '../MuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import { Link } from 'react-router-dom'
import '../../css/components/SearchGameListItems.scss'


const SearchGameListItems = ({ gamelistId=0, creatorId=0, creatorName="", creatorAvatar="", gameListName="", gameListCover="",gameListDescription="" }) => (
    <div className='search-gamelist-item-wrapper'>
        <Link to={`/gamelist/${gamelistId}`}>
            <MuiThemeProvider muiTheme={muiTheme}>
                <Card zDepth={5}>
                    <CardHeader title={creatorName} avatar={creatorAvatar}/>
                    <CardMedia overlay={<CardTitle title={gameListName} subtitle={gameListDescription} />} >
                        <div className='search-gamelist-item-img-container'>
                            <img src={gameListCover}/>
                        </div>
                    </CardMedia>
                </Card>
            </MuiThemeProvider>
        </Link>
    </div>
)

export default SearchGameListItems