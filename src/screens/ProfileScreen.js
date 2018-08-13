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
                <ButtonGroup large>
                    <Button onMouseDown={() => {
                        this.props.authActions.signUp({
                            email: "mkaa00x@live.co.uk",
                            password: "fakkkkkkeeee3",
                            name: "Mohammad Al-Ahdal",
                            role: 0,
                            description: "I love coding. Heck, I made this website.",
                            discipline: {
                                year: 3,
                                faculty: "Engineering",
                                specialization: "Electrical",
                            },
                        })
                    }} className="bp3-intent-warning" icon="edit">Signup</Button>
                    <Button onMouseDown={() => {
                        this.props.authActions.signIn({
                            email: "mkaa00x@live.co.uk",
                            password: "fakkkkkkeeee3",
                        })
                    }} className="bp3-intent-success" icon="arrow-right">Login</Button>
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