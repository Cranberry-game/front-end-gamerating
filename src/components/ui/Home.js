import { Link } from 'react-router-dom'
import muiTheme from '../MuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AutoComplete from 'material-ui/AutoComplete'

const Home = ({ dataSource=["abc", "def", "ghi"], handleUpdateInput}) => {

    handleUpdateInput = value => {
        console.log(value)
    }

    return (
        <div>
            <h1>Game Rating</h1>
            <MuiThemeProvider muiTheme={muiTheme}>
                <AutoComplete
                hintText="Type the game you want to search"
                dataSource={dataSource}
                onUpdateInput={handleUpdateInput}
            />
            </MuiThemeProvider>
        </div>
    )
}

export default Home