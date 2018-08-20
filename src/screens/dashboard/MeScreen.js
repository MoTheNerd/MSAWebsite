import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { Redirect } from 'react-router'

import * as AuthActions from '../../actions/AuthActions'

import { ButtonGroup, InputGroup } from '@blueprintjs/core';
import { Split, Article, Sidebar, Box, App, Section } from 'grommet';
import { Button as BButton } from '@blueprintjs/core'
import Button from 'material-kit-react/components/CustomButtons/Button';
import CustomInput from 'material-kit-react/components/CustomInput/CustomInput'


class MeScreen extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            name: this.props.auth.name,
            email: this.props.auth.email,
            role: this.props.auth.role,
            description: this.props.auth.description,
            year: this.props.auth.discipline.year,
            faculty: this.props.auth.discipline.faculty,
            specialization: this.props.auth.discipline.specialization,
        }
    }

    render() {
        return (
            <Box direction="column" style={{ minWidth: "500px", padding: 0, margin: 0 }}>
                <CustomInput
                    inputProps={
                        {
                            disabled: true,
                            defaultValue: this.props.auth.email
                        }
                    }
                    labelText="Email"
                />
                <CustomInput
                    inputProps={
                        {
                            defaultValue: this.props.auth.name
                        }
                    }
                    labelText="Name"
                />
                <CustomInput
                    inputProps={{
                        onChange: (event) => {
                            this.state.description = event.target.value
                            this.forceUpdate()
                        },
                        defaultValue: this.props.auth.description,
                        type: "text",
                        multiline: true,
                        rowsMax: 5,
                    }}
                    labelText="Description"
                    formControlProps={{
                        fullWidth: true
                    }}
                />
                <CustomInput
                    inputProps={{
                        onChange: (event) => {
                            this.state.faculty = event.target.value
                            this.forceUpdate()
                        },
                        defaultValue: this.props.auth.discipline.faculty,
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
                            this.state.year = parseInt(event.target.value, 10)
                            this.forceUpdate()
                        },
                        defaultValue: this.props.auth.discipline.year,
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
                            this.state.specialization = event.target.value
                            this.forceUpdate()
                        },
                        defaultValue: this.props.auth.discipline.specialization,
                        type: "text",
                    }}
                    labelText="Specialization"
                    formControlProps={{
                        fullWidth: true
                    }}
                />
                <Button
                    round
                    type="button"
                    color="info"
                    component={BButton}
                    onMouseDown={() => {
                        this.props.authActions.updateInfo({
                            email: this.state.email,
                            name: this.state.name,
                            description: this.state.description,
                            role: this.state.role,
                            discipline: {
                                year: this.state.year,
                                faculty: this.state.faculty,
                                specialization: this.state.specialization,
                            },
                        })
                    }}
                >
                    Update Information
                </Button>
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