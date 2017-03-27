import muiTheme from '../MuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Avatar from 'material-ui/Avatar'
import '../../css/components/CommentItem.scss'

const CommentItem =({userName="wangye", commentTime="2017-03-01", rate=3, comment="llala"}) => {
    return (
        <div className='comment-item-container'>
            <div className='avatar-container'>
                <MuiThemeProvider muiTheme={muiTheme}>
                    <Avatar src='http://img.duoziwang.com/2016/12/08/18594927932.jpg'/>
                </MuiThemeProvider>
            </div>
            <div className='comment-container'>
                <div className='comment-header-container'>
                    <div className='comment-info-container'>
                        <span className='user-name-container'>
                            <p className='user-name'>{userName}</p>
                        </span>
                        <span className='comment-time-container'>
                            <p className='comment-time'>{commentTime}</p>
                        </span>
                    </div>
                    <div className='rate-container'>
                        <p className='rate'>{rate}</p>
                    </div>
                </div>
                <div className='comment-body-container'>
                    <p className='comment-body'>{comment}</p>
                </div>
            </div>
        </div>
    )
}

export default CommentItem