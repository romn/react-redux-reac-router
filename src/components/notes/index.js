import { connect } from 'react-redux'
import Component from './component'

const mapStateToProps = state => ({
    note: state.note
});

export default connect(
    mapStateToProps
)(Component)
