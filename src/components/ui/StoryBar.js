import '../../css/components/StoryBar.scss'

const StoryBar = ({imgSource="http://img.sc115.com/uploads1/sc/jpgs/1509/apic14886_sc115.com.jpg", imgDescription="header", title="title", description="description", time="2017-3-24"}) => {

    return (
        <div className='story-header'>
            <div className='story-header-cover'></div>
            <div className='story-header-imgContainer'>
                <div className='story-header-imgContainer-img'>
                    <img src={imgSource} alt={imgDescription} />
                </div>
            </div>
            <div className='story-header-cover-second'></div>
            <div className='story-header-inner'>
                <div className='story-header-text'>
                    <h1 className='story-title'>{title}</h1>
                    <p className='story-description'>{description}</p>
                    <p className='story-time'>{time}</p>
                </div>
            </div>
        </div>
    )
}

export default StoryBar