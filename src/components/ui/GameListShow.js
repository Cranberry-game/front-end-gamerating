import muiTheme from '../MuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { GridList, GridTile } from 'material-ui/GridList'


const GameListShow = ({ screenshots=[] }) => {

    const styles = {
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
        },
        gridList: {
            display: 'flex',
            flexWrap: 'nowrap',
            overflowX: 'auto',
        },
        titleStyle: {
            color: 'rgb(0, 188, 212)',
        },
    }

    console.log(`the length of screenshots is ${screenshots.length}`)

    return (
        <div className='game-list-show-container'>
            <MuiThemeProvider muiTheme={muiTheme}>
                <GridList style={styles.gridList} cols={2.2}>
                    {screenshots.map((screenshot, i) => (
                        <GridTile key={i} title={"screenshots"} titleStyle={styles.titleStyle} titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)">
                            <img src={screenshot.img} />
                        </GridTile>
                    ))}
                </GridList>
            </MuiThemeProvider>
        </div>
    )
}

export default GameListShow