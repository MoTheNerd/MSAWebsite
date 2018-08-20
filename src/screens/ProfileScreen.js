import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { Redirect } from 'react-router'

import * as AuthActions from '../actions/AuthActions'

import { ButtonGroup, InputGroup } from '@blueprintjs/core';
import { Split, Article, Sidebar, Box, App, Section } from 'grommet';
import { Button as BButton } from '@blueprintjs/core'
import Button from 'material-kit-react/components/CustomButtons/Button';

import DAbout from './dashboard/AboutScreen'
import DEvents from './dashboard/EventsScreen'
import DMe from './dashboard/MeScreen'
import DPrayerTimes from './dashboard/PrayerTimesScreen'
import Danger from 'material-kit-react/components/Typography/Danger'


class ProfileScreen extends React.Component {

    componentDidMount() {
        if (this.props.auth.status === "UNAUTHORIZED") {
            this.props.history.push("/profile/login")
        }
    }

    render() {
        return (
            <Box full direction="row" style={{ padding: 0, margin: 0 }}>
                <Sidebar style={{ backgroundColor: "#333333", paddingLeft: "30px", paddingRight: "30px", borderRight: "1px solid #888888" }}>
                    <Box full justify="center" align="center">
                        <Button
                            component={Link}
                            to="/profile/me"
                            round
                            fullWidth
                            color={this.props.currentSP === "me" ? "twitter" : null}
                            simple={this.props.currentSP === "me" ? false : true}
                        >
                            My Profile
                        </Button>
                        <Button
                            component={Link}
                            to="/profile/events"
                            round
                            fullWidth
                            color={this.props.currentSP === "events" ? "twitter" : null}
                            simple={this.props.currentSP === "events" ? false : true}
                        >
                            Events
                        </Button>
                        <Button
                            component={Link}
                            to="/profile/prayers"
                            round
                            fullWidth
                            color={this.props.currentSP === "prayers" ? "twitter" : null}
                            simple={this.props.currentSP === "prayers" ? false : true}
                        >
                            Prayer Times
                        </Button>
                        <Button
                            component={Link}
                            to="/profile/about"
                            round
                            fullWidth
                            color={this.props.currentSP === "about" ? "twitter" : null}
                            simple={this.props.currentSP === "about" ? false : true}
                        >
                            About
                        </Button>
                    </Box>
                    <Button component={BButton} style={{ marginBottom: "20px" }} fullWidth color="danger" >Logout</Button>
                </Sidebar>
                <Section full style={{ backgroundColor: "#F9F9F9", padding: 0, margin: 0 }}>
                    <Box full align="center" justify="center">
                        {this.renderSection(this.props.currentSP)}
                    </Box>
                </Section>
            </Box>
        );
    }

    _sections = {
        me: DMe,
        events: DEvents,
        prayers: DPrayerTimes,
        about: DAbout,
        root: Box
    }

    renderSection(sp) {
        let Sec = this._sections[sp]
        if (Sec === undefined) {
            Sec = () => {
                <Box full align="center" justify="center">
                    <Danger>404 | Page not found</Danger>
                </Box>
            }
        }
        return <Sec />
    }
}

function mapStateToProps(state, props) {
    let p = state.router.location.pathname.split("/")
    if (p[p.length - 1] === "profile") {
        p[p.length - 1] = "root"
    }
    return {
        auth: state.auth,
        currentSP: p[p.length - 1]
    };
}

function mapDispatchToProps(dispatch) {
    return {
        authActions: bindActionCreators(AuthActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen)