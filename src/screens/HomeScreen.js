import React from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { CommonContainer } from '../components/Common';

class HomeScreen extends React.Component {
    render() {
        return (
            <CommonContainer>
                <h1>Home</h1>
                <p>Welcome home!</p>
                <button onClick={() => this.props.changePage()}>Go to about page via redux</button>
            </CommonContainer>
        );
    }
}

function mapStateToProps(state, props) {
    return {
        monday: state.general.monday,
        tuesday: state.general.tuesday,
        wednesday: state.general.wednesday,
        thursday: state.general.thursday,
        friday: state.general.friday,
        jummah: state.general.jummah,
    };
}

function mapDispatchToProps(dispatch) {
    return (
        bindActionCreators({
            changePage: () => push('/about')
        }, dispatch)
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)