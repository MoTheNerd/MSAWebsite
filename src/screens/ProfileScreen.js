import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as AuthActions from '../actions/AuthActions'

import Article from 'grommet/components/Article'

import { ButtonGroup, Button, InputGroup } from '@blueprintjs/core';

class ProfileScreen extends React.Component {
    render() {
        return (
            this.props.auth && this.props.auth.staus === "AUTHORIZED" ? this.renderDashBoard() : this.renderLogin()
        );
    }

    renderLogin() {
        return (
            <Article
                full
                justify='center'
                align='center'
            >
                <InputGroup large leftIcon="envelope" placeholder="email address"></InputGroup>
                <span style={{ height: "1em" }} />
                <InputGroup large leftIcon="lock" placeholder="password"></InputGroup>
                <span style={{ height: "0.5em" }} />
                <Button title="Forgot Username?" minimal>Forgot password?</Button>
                <span style={{ height: "3em" }} />
                <ButtonGroup large onMouseEnter={() => { console.log("hi") }}>
                    <Button onMouseDown={(this.props.authActions.signUp({
                        email: "mkaa00x@live.co.uk",
                        password: "fakkkkkkeeee3"
                    }))} className="bp3-intent-warning" icon="edit">Signup</Button>
                    <Button className="bp3-intent-success" icon="arrow-right">Login</Button>
                </ButtonGroup>
            </Article>
        );
    }

    renderDashBoard() {
        return (
            <Article
                full
                justify='center'
                align='center'
            >

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