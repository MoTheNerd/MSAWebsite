import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { Redirect } from 'react-router'

import * as AuthActions from '../../actions/AuthActions'

import { ButtonGroup, InputGroup } from '@blueprintjs/core';
import { Split, Article, Sidebar, Box, App, Section } from 'grommet';
import { Button as BButton } from '@blueprintjs/core'
import Button from 'material-kit-react/components/CustomButtons/Button';

class MeScreen extends React.Component {

    render() {
        return (
            <Box direction="row" style={{ padding: 0, margin: 0 }}>
                <p>swaggyPants</p>
            </Box>
        );
    }
}

function mapStateToProps(state, props) {
    return {
        auth: state.auth
    };
}

function mapDispatchToProps(dispatch) {
    return {
        authActions: bindActionCreators(AuthActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MeScreen)