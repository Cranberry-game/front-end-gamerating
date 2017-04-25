import { Component } from 'react'
import muiTheme from '../MuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton'
import Dialog from 'material-ui/Dialog'
import AvatarEditor from 'react-avatar-editor'
import Slider from 'material-ui/Slider'

class EditAvatar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            scale: 1,
            position: {
                x: 0.5,
                y: 0.5
            }
        }
    }

    handleConfirm = e => {
        e.preventDefault()
        const { uploadAvatar=f=>f } = this.props
        this.editor.getImageScaledToCanvas().toBlob(blob => {
            let file = new File([blob], "avatar.jpg", {type: 'image/jpeg', lastModified: Date.now()})
            console.log(file)
            uploadAvatar(file)
        })
        this.handleClose()
    }

    handleClose = () => {
        const { closeEditAvatarPopover=f=>f, openRegisterForm=f=>f } = this.props
        closeEditAvatarPopover()
        openRegisterForm()
    }

    handleChangeScale = (e, value) => {
        this.setState({
            scale: value
        })
    }

    setEditorRef = (editor) => {
        if (editor) this.editor = editor
    }

    render() {
        const actions = [
            <RaisedButton label='Confirm' fullWidth={true} onTouchTap={this.handleConfirm}/>
        ]

        const { isEditAvatarOpen=false, openEditAvatarPopover=f=>f } = this.props
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <Dialog title='Register' actions={actions} open={isEditAvatarOpen} modal={false} onRequestClose={this.handleClose}>
                    <AvatarEditor
                        ref={this.setEditorRef}
                        scale={parseFloat(this.state.scale)}
                    />
                    <Slider
                        min={1}
                        max={3}
                        defaultValue={1}
                        value={this.state.scale}
                        onChange={this.handleChangeScale}
                    />
                </Dialog>
            </MuiThemeProvider>
        )
    }
}

export default EditAvatar