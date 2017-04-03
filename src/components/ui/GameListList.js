import GameListItem from './GameListItem'
import '../../css/components/GameListList.scss'

const GameListList = ({ games=[], removeGameFromGameList=f=>f }) => {

    return (
        <div className='gamelistlist-container'>
            {games.map(game => (<GameListItem key={game.id} gamecover={game.cover} gametitle={game.title} gameId={game.id} removeGameFromGameList={removeGameFromGameList}/>))}
        </div>
    )
}

export default GameListList