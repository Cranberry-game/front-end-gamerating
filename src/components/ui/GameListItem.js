const GameListItem = () => {
    return (
        <div className='gamelistitem-container'>
            <div className='gamelistitem-img-comtainer'>
                <img src='http://i1.kym-cdn.com/entries/icons/facebook/000/007/217/Potatoe.jpg' alt='gamecover' />
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