import GameListItem from './GameListItem'
import '../../css/components/GameListList.scss'

const GameListList = ({ games=[] }) => {

    return (
        <div className='gamelistlist-container'>
            {games.map(game => (<GameListItem key={game.id} gamecover={game.cover} gametitle={game.title}/>))}
        </div>
    )
}

export default GameListList