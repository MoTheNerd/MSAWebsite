import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { CommonContainer } from '../components/Common';

class EventScreen extends React.Component {
    render() {
        return (
            <CommonContainer>
                <h1>Events</h1>
                <p>Welcome events!</p>
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
        bindActionCreators({}, dispatch)
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(EventScreen)