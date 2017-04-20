import GameListItem from './GameListItem'
import '../../css/components/GameListList.scss'

const GameListList = ({ games=[], removeGameFromGameList=f=>f, id=0 }) => {

    return (
        <div className='gamelistlist-container'>
            {games.map(game => (<GameListItem key={game.id} gamecover={game.cover} gametitle={game.title} gameId={game.id} removeGameFromGameList={removeGameFromGameList} id={id}/>))}
        </div>
    )
}

export default GameListList