import { Rating } from 'material-ui-rating'
import muiTheme from '../MuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Avatar from 'material-ui/Avatar'
import '../../css/components/CommentSend.scss'

const CommentSend = () => {
    return (
        <div className='comment-send'>
            <MuiThemeProvider muiTheme={muiTheme}>
                <Rating disabled={false} readOnly={false} value={0} max={10} onChange={(value) => console.log(`Rated with value ${value}`)}/>
            </MuiThemeProvider>
            <div className='user-face'>
                <MuiThemeProvider muiTheme={muiTheme}>
                    <Avatar src='http://img.bitscn.com/upimg/allimg/c160120/1453262K6421Z-12X00.jpg'/>
                </MuiThemeProvider>
            </div>
            <div className='textarea-container'>
                <i className='ipt-arrow'></i>
                <textarea cols="80" name="msg" rows="5" placeholder="请自觉遵守互联网相关的政策法规，严禁发布色情、暴力、反动的言论。" className="ipt-txt" spellCheck="false"></textarea>
                <button type="submit" className="comment-submit">发表评论</button>
            </div>
        </div>
    )
}

export default CommentSend