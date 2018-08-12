import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { CommonContainer } from '../components/Common';

import Article from 'grommet/components/Article'

import { ButtonGroup, Button, InputGroup } from '@blueprintjs/core';

class ProfileScreen extends React.Component {
    render() {
        return (
            <Article
                full
                justify='center'
                align='center'
            >
                <InputGroup large leftIcon="envelope" placeholder="email address"></InputGroup>
                <span style={{height: "1em"}} />
                <InputGroup large leftIcon="lock" placeholder="password"></InputGroup>
                <span style={{height: "0.5em"}} />
                <Button title="Forgot Username?" minimal>Forgot password?</Button>
                <span style={{height: "3em"}} />
                <ButtonGroup large onMouseEnter={() => { console.log("hi") }}>
                    <Button className="bp3-intent-warning" icon="edit">Signup</Button>
                    <Button className="bp3-intent-success" icon="arrow-right">Login</Button>
                </ButtonGroup>
            </Article>
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

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen)