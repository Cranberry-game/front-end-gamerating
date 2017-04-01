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
    };

    const tilesData = [
        {
            img: 'images/grid-list/00-52-29-429_640.jpg',
            title: 'Breakfast',
            author: 'jill111',
        },
        {
            img: 'images/grid-list/burger-827309_640.jpg',
            title: 'Tasty burger',
            author: 'pashminu',
        },
        {
            img: 'images/grid-list/camera-813814_640.jpg',
            title: 'Camera',
            author: 'Danson67',
        },
        {
            img: 'images/grid-list/morning-819362_640.jpg',
            title: 'Morning',
            author: 'fancycrave1',
        },
        {
            img: 'images/grid-list/hats-829509_640.jpg',
            title: 'Hats',
            author: 'Hans',
        },
        {
            img: 'images/grid-list/honey-823614_640.jpg',
            title: 'Honey',
            author: 'fancycravel',
        },
        {
            img: 'images/grid-list/vegetables-790022_640.jpg',
            title: 'Vegetables',
            author: 'jill111',
        },
        {
            img: 'images/grid-list/water-plant-821293_640.jpg',
            title: 'Water plant',
            author: 'BkrmadtyaKarki',
        },
    ];

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