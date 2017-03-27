import { Link } from 'react-router-dom'
import muiTheme from '../MuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AutoComplete from 'material-ui/AutoComplete'
import RegisterForm from './RegisterForm'
import LoginForm from './LoginForm'
import '../../css/components/Home.scss';

const Home = ({ dataSource=["abc", "def", "ghi"], handleUpdateInput}) => {

    handleUpdateInput = value => {
        console.log(value)
    }

    return (
        <div className="home-page-container">
            <div className='home-page-title-container'>
                <h1 className="home-page-title"><strong>GAME RATING</strong></h1>
            </div>
            <div className='search-bar-container'>
                <MuiThemeProvider muiTheme={muiTheme}>
                    <AutoComplete hintText="Type the game you want to search" dataSource={dataSource} onUpdateInput={handleUpdateInput}/>
                </MuiThemeProvider>
            </div>
        </div>
    )
}

export default Home