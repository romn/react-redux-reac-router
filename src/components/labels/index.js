import { connect } from 'react-redux'
import Component from './component'

const mapStateToProps = state => ({
    label: state.label
});

export default connect(
    mapStateToProps
)(Component)
