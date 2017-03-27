import muiTheme from '../MuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Avatar from 'material-ui/Avatar'

const CommentItem =({userName="wangye", commentTime="2017-03-01", rate=3, comment="llala"}) => {
    return (
        <div className='list-item reply-wrap'>
            <div className='user-face'>
                <MuiThemeProvider muiTheme={muiTheme}>
                    <Avatar src='http://img0.pconline.com.cn/pconline/1408/11/5254676_1407293-3_thumb.jpg'/>
                </MuiThemeProvider>
            </div>
            <div className='con no-border'>
                <div className='user'>
                    <div className='comment-info-container'>
                        <p className='user-name'>{userName}</p>
                    </div>
                </div>
                {/*<div className='comment-body-container'>
                    <p className='comment-body'>{comment}</p>
<<<<<<< HEAD
                </div>
                <div className='info'>
                    <span className='comment-time'>{commentTime} </span>
                    <span className='rate'>{rate}</span>
                </div>
=======
                </div>*/}
>>>>>>> 530dc2a066555668112931ef4a3efe5340e43236
            </div>
        </div>
    )
}

export default CommentItem