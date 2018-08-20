import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as AuthActions from '../actions/AuthActions'

import Article from 'grommet/components/Article'
import Box from 'grommet/components/Box'

import NavPills from "material-kit-react/components/NavPills/NavPills"
import Button from "material-kit-react/components/CustomButtons/Button"
import { Button as BButton } from '@blueprintjs/core'
import Muted from 'material-kit-react/components/Typography/Muted'
import CustomInput from 'material-kit-react/components/CustomInput/CustomInput'

import Background from '../assets/img/backdrop.png'

class LoginScreen extends React.Component {
    state = {
        signIn: {
            email: "",
            validEmail: false,
            password: "",
            validPassword: false,
        },
        signUp: {
            name: "",
            email: "",
            validEmail: false,
            password: "",
            confirmPassword: "",
            validPassword: false,
            validPasswordConfirm: false,
            description: "",
            faculty: "",
            year: 1,
            specialization: "",
        },
    }

    validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    validatePassword(password) {
        return String(password).length >= 6
    }

    validateConfirmPassword(confirmPassword) {
        return this.state.signUp.password === confirmPassword
    }

    render() {
        return (
            <Box full justify="center" align="center">
                <NavPills
                    alignCenter={true}
                    color="warning"
                    tabs={[
                        {
                            tabButton: "Login",
                            tabContent: (

                                [<Box>
                                    <CustomInput
                                        inputProps={
                                            {
                                                onChange: (event) => {
                                                    this.state.signIn.email = event.target.value
                                                    this.state.signIn.validEmail = this.validateEmail(this.state.signIn.email)
                                                    this.forceUpdate()
                                                },
                                                type: "email"
                                            }
                                        }
                                        error={!this.state.signIn.validEmail}
                                        labelText="Email"
                                    />
                                </Box>,
                                <Box>
                                    <CustomInput
                                        inputProps={{
                                            onChange: (event) => {
                                                this.state.signIn.password = event.target.value
                                                this.state.signIn.validPassword = this.validatePassword(this.state.signIn.password)
                                                this.forceUpdate()
                                            },
                                            type: "password"
                                        }}
                                        error={!this.state.signIn.validPassword}
                                        labelText="Password"
                                    />
                                </Box>,
                                <Box>
                                    <span style={{ marginTop: "1em" }} />
                                    <Button
                                        disabled={!(this.state.signIn.validEmail && this.state.signIn.validPassword)}
                                        component={BButton}
                                        onMouseDown={() => {
                                            this.props.authActions.signIn({
                                                email: this.state.signIn.email,
                                                password: this.state.signIn.password
                                            })
                                        }} round type="button" color="info">Login</Button>
                                </Box>]
                            )
                        },
                        {
                            tabButton: "Sign Up",
                            tabContent: (
                                [<Box>
                                    <Muted>This signup will not work unless you have been<br />authorized by an admin to sign up.</Muted>
                                    <CustomInput
                                        inputProps={
                                            {
                                                onChange: (event) => {
                                                    this.state.signUp.name = event.target.value
                                                    this.forceUpdate()
                                                },
                                                type: "name"
                                            }
                                        }
                                        labelText="Full Name"
                                    />
                                    <CustomInput
                                        inputProps={
                                            {
                                                onChange: (event) => {
                                                    this.state.signUp.email = event.target.value
                                                    this.state.signUp.validEmail = this.validateEmail(this.state.signUp.email)
                                                    this.forceUpdate()
                                                },
                                                type: "email"
                                            }
                                        }
                                        error={!this.state.signUp.validEmail}
                                        labelText="Email"
                                    />
                                </Box>,
                                <Box>
                                    <CustomInput
                                        inputProps={{
                                            onChange: (event) => {
                                                this.state.signUp.password = event.target.value
                                                this.state.signUp.validPassword = this.validatePassword(this.state.signUp.password)
                                                this.forceUpdate()
                                            },
                                            type: "password"
                                        }}
                                        error={!this.state.signUp.validPassword}
                                        labelText="Password"
                                    />
                                    <CustomInput
                                        inputProps={{
                                            onChange: (event) => {
                                                this.state.signUp.confirmPassword = event.target.value
                                                this.state.signUp.validPasswordConfirm = this.validateConfirmPassword(this.state.signUp.confirmPassword)
                                                this.forceUpdate()
                                            },
                                            type: "password"
                                        }}
                                        error={!this.state.signUp.validPasswordConfirm}
                                        labelText="Confirm Password"
                                    />
                                </Box>,
                                <Box>
                                    <CustomInput
                                        inputProps={{
                                            onChange: (event) => {
                                                this.state.signUp.description = event.target.value
                                                this.forceUpdate()
                                            },
                                            type: "text",
                                            multiline: true,
                                            rowsMax: 5,
                                        }}
                                        labelText="Description"
                                        formControlProps={{
                                            fullWidth: true
                                        }}
                                    />
                                </Box>,
                                <Box>
                                    <CustomInput
                                        inputProps={{
                                            onChange: (event) => {
                                                this.state.signUp.faculty = event.target.value
                                                this.forceUpdate()
                                            },
                                            type: "text",
                                        }}
                                        labelText="Faculty"
                                        formControlProps={{
                                            fullWidth: true
                                        }}
                                    />
                                    <CustomInput
                                        inputProps={{
                                            onChange: (event) => {
                                                this.state.signUp.year = parseInt(event.target.value, 10)
                                                this.forceUpdate()
                                            },
                                            type: "number",
                                        }}
                                        labelText="Year"
                                        formControlProps={{
                                            fullWidth: true
                                        }}
                                    />
                                    <CustomInput
                                        inputProps={{
                                            onChange: (event) => {
                                                this.state.signUp.specialization = event.target.value
                                                this.forceUpdate()
                                            },
                                            type: "text",
                                        }}
                                        labelText="Specialization"
                                        formControlProps={{
                                            fullWidth: true
                                        }}
                                    />
                                </Box>,
                                <Box>
                                    <span style={{ marginTop: "1em" }} />
                                    <Button
                                        round
                                        type="button"
                                        disabled={!(this.state.signUp.validEmail && this.state.signUp.validPassword && this.state.signUp.validPasswordConfirm)}
                                        color="info"
                                        component={BButton}
                                        onMouseDown={() => {
                                            this.props.authActions.signUp({
                                                email: this.state.signUp.email,
                                                password: this.state.signUp.password,
                                                name: this.state.signUp.name,
                                                role: 0,
                                                description: this.state.signUp.description,
                                                discipline: {
                                                    year: this.state.signUp.year,
                                                    faculty: this.state.signUp.faculty,
                                                    specialization: this.state.signUp.specialization,
                                                },
                                            })
                                        }}
                                    >
                                        Sign Up
                                    </Button>
                                </Box>
                                ]
                            )
                        },
                    ]}
                />
            </Box>
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)