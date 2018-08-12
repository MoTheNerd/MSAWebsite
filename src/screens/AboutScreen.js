import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { CommonContainer } from '../components/Common';

class AboutScreen extends React.Component {
    render() {
        return (
            <CommonContainer>
                <h1>About</h1>
                <p>Welcome about!</p>
            </CommonContainer>
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