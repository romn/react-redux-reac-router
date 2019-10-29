import { connect } from 'react-redux'
import Component from './component'

const mapStateToProps = state => ({
    ...state
});

export default connect(
    mapStateToProps
)(Component)
