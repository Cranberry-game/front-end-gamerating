import '../../css/components/GameListItem.scss'

const GameListItem = () => {
    return (
        <div className='gamelistitem-container'>
            <div className='gamelistitem-img-container'>
                <img src='http://p7.qhimg.com/t014033e9e74792bdec.jpg' alt='gamecover' />
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