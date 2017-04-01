import muiTheme from '../MuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card'
import { Link } from 'react-router-dom'
import '../../css/components/SearchGameItems.scss'

const SearchGameItems = ({ gameTitle="", gameId=0, gameCover="", gameDesc="" }) => (
    <div className='search-game-item-wrapper'>
        <Link to={`/game/${gameId}`}>
            <MuiThemeProvider muiTheme={muiTheme}>
                <Card>
                    <CardMedia overlay={<CardTitle title={gameTitle} subtitle={gameDesc}/>}>
                        <div className='search-game-item-img-container'>
                            <img src={gameCover}/>
                        </div>
                    </CardMedia>
                </Card>
            </MuiThemeProvider>
        </Link>
    </div>
)

export default SearchGameItems