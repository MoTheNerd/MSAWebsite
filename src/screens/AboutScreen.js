import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { CommonContainer } from '../components/Common';
import { Article } from 'grommet'

class AboutScreen extends React.Component {
    render() {
        return (
            <Article align="center">
                <h1>About</h1>
                <p>Welcome about!</p>
            </Article>
        );
    }
}

function mapStateToProps(state, props) {
    return {

    };
}

function mapDispatchToProps(dispatch) {
    return (
        bindActionCreators({}, dispatch)
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(AboutScreen)