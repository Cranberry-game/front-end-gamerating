import '../../css/components/GameListItem.scss'

const GameListItem = () => {
    return (
        <div className='gamelistitem-container'>
            <div className='gamelistitem-img-container'>
                <img src='http://p8.qhimg.com/t01c6644a5ce5c955a5.jpg' alt='gamecover' />
            </div>
            <div className='gamelistitem-img-cover'></div>
            <div className='gamelistitem-img-header-container'>
                <h3 className='gamelistitem-img-title'>game title</h3>
                <p className='gamelistitem-img-desc'>game desc</p>
            </div>
        </div>
    )
}

export default GameListItem