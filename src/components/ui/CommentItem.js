import muiTheme from '../MuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Avatar from 'material-ui/Avatar'
import '../../css/components/CommentItem.scss'

const CommentItem =({userName="wangye", commentTime="2017-03-01", rate=3, content="This gamelist is awesome!", avatar='http://img.duoziwang.com/2016/12/08/18594927932.jpg' }) => {
    
    console.log(`avatar is ${avatar}`)

    return (
        <div className='list-item reply-wrap'>
            <div className='user-face'>
                <MuiThemeProvider muiTheme={muiTheme}>
                    <Avatar src={avatar}/>
                </MuiThemeProvider>
            </div>
            <div className='con no-border'>
                <div className='user'>
                    <div className='comment-info-container'>
                        <p className='user-name'>{userName}</p>
                    </div>
                </div>
                <div className='comment-body-container'>
                    <p className='comment-body'>{content}</p>
                </div>
                <div className='info'>
                    <span className='comment-time'>{commentTime} </span>
                    <span className='rate'>{`${rate} / 10`}</span>
                </div>
            </div>
        </div>
    )
}

export default CommentItem