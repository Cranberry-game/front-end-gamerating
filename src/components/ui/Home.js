import { Link } from 'react-router-dom'
import { grey400 } from 'material-ui/styles/colors'
import muiTheme from '../MuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AutoComplete from 'material-ui/AutoComplete'
import RegisterForm from './RegisterForm'
import LoginForm from './LoginForm'
import '../../css/components/Home.scss';

const Home = ({ gameOrGamelistSuggestions=[], handleUpdateInput=f=>f, homeSearch=f=>f, getGameOrGamelistSuggestions=f=>f, history}) => {

    handleUpdateInput = value => {
        if (value.length === 1) {
            getGameOrGamelistSuggestions(value)
        }
    }


    const onSearch = (chosenRequest) => {
        console.log(chosenRequest)
        history.push('/search?name='+chosenRequest)
    }

    const searchBarStyle = {
        color: '#FFF'
    }

    const searchBarHintStyle = {
        color: grey400
    }

    

    return (
        
        <div className="home-page-container">
            <div id="bg">
                {/*<img src="http://img13.deviantart.net/9b3f/i/2015/288/3/1/aeolian_by_wlop-d9ctyhy.jpg" />*/}

                <iframe  src="https://www.youtube.com/embed/jwjGw9A37P4?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&playlist=jwjGw9A37P4" frameborder="0" allowfullscreen></iframe>     
                {/*need to change video_ID behind "embed/"and"playlist=" to change video, get ID from youtube by click sharing.*/}

                </div>
            <div className='home-page-title-container'>
                <h1 className="home-page-title"><strong>GAME RATING</strong></h1>
            </div>
            <div className='search-bar-container'>
                <MuiThemeProvider muiTheme={muiTheme}>
                    <AutoComplete hintText="Type the game you want to search" dataSource={gameOrGamelistSuggestions} onUpdateInput={handleUpdateInput} className="home-page-search-bar" onNewRequest={onSearch} inputStyle={searchBarStyle} hintStyle={searchBarHintStyle} filter={AutoComplete.caseInsensitiveFilter}/>
                </MuiThemeProvider>
            </div>
        </div>
    )
}

export default Home