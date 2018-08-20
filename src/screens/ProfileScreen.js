import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { Redirect } from 'react-router'

import * as AuthActions from '../actions/AuthActions'

import Article from 'grommet/components/Article'

import { ButtonGroup, Button, InputGroup } from '@blueprintjs/core';

class ProfileScreen extends React.Component {

    componentDidMount() {
        if (this.props.auth.status === "UNAUTHORIZED") {
            this.props.history.push("/profile/login")
        }
    }

    render() {
        return (
            <Article
                full
                justify='center'
                align='center'
            >
                <Button title="Logout" value="Logout" onClick={() => {
                    console.log("ahg")
                    this.props.authActions.signOut()
                }} />
            </Article>
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

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen)