import GameListItem from './GameListItem'
import '../../css/components/GameListList.scss'

const GameListList = () => {
    
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

    return (
        <div className='gamelistlist-container'>
            {tilesData.map((item, i) => (<GameListItem key={i}/>))}
        </div>
    )
}

export default GameListList