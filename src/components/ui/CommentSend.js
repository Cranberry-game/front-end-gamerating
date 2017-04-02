import { Component } from 'react'
import { Rating } from 'material-ui-rating'
import muiTheme from '../MuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Avatar from 'material-ui/Avatar'
import '../../css/components/CommentSend.scss'

class CommentSend extends Component {
    constructor(props) {
        super(props)
        this.state = {
            rate: 0
        }
        this._comment=''
    }

    

    handleTextareaChange = e => {
        this._comment=e.target.value
    }

    handleSendComment = () => {  

        const { id=0, currentUserId=0, addReview=f=>f } = this.props

        addReview({
            id: id,
            userId: currentUserId,
            rate: this.state.rate,
            content: this._comment
        })
    }

    render() {

        const { currentUserAvatar="" } = this.props
        
        return (
            <div className='comment-send'>
                <MuiThemeProvider muiTheme={muiTheme}>
                    <Rating disabled={false} readOnly={false} value={this.state.rate} max={10} onChange={(value) => this.setState({rate: value})}/>
                </MuiThemeProvider>
                <div className='user-face'>
                    <MuiThemeProvider muiTheme={muiTheme}>
                        <Avatar src={currentUserAvatar}/>
                    </MuiThemeProvider>
                </div>
                <div className='textarea-container'>
                    <i className='ipt-arrow'></i>
                    <textarea cols="80" name="msg" rows="5" placeholder="Publish your review" className="ipt-txt" spellCheck="false" onChange={this.handleTextareaChange}/>
                    <button type="submit" className="comment-submit" onClick={this.handleSendComment}>Send</button>
                </div>
            </div>
        )
    }
}


export default CommentSend