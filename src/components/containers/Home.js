import Home from '../ui/Home'
import { connect } from 'react-redux'

const mapStateToProps = state => (
    dateSource: state.suggestions.gameNames
)