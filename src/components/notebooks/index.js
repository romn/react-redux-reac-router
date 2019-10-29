import { connect } from 'react-redux'
import Component from './component'

const mapStateToProps = state => ({
    notebook: state.notebook
});

export default connect(
    mapStateToProps
)(Component)
