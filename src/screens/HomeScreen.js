import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Article } from 'grommet'
import * as GeneralActions from '../actions/GeneralActions'

class HomeScreen extends React.Component {
    componentDidMount() {
        this.props.generalActions.getPrayerTimes()
    }
    render() {
        return (
            <Article align="center">
                <p>Welcome home!</p>
                <button onClick={async () => {
                    this.props.generalActions.setPrayerTimes({
                        monday: {
                            f: "04:00",
                            d: "13:00",
                            a: "17:00",
                            m: "21:20",
                            i: "23:00",
                        },
                        tuesday: {
                            f: "04:00",
                            d: "13:00",
                            a: "17:00",
                            m: "21:20",
                            i: "23:00",
                        },
                        wednesday: {
                            f: "04:00",
                            d: "13:00",
                            a: "17:00",
                            m: "21:20",
                            i: "23:00",
                        },
                        thursday: {
                            f: "04:00",
                            d: "13:00",
                            a: "17:00",
                            m: "21:20",
                            i: "23:00",
                        },
                        friday: {
                            f: "04:00",
                            d: "13:00",
                            j: [
                                "13:15",
                                "14:15"
                            ],
                            a: "17:00",
                            m: "21:20",
                            i: "23:00",
                        },
                        saturday: {
                            f: "04:00",
                            d: "13:00",
                            a: "17:00",
                            m: "21:20",
                            i: "23:00",
                        },
                        sunday: {
                            f: "04:00",
                            d: "13:00",
                            a: "17:00",
                            m: "21:20",
                            i: "23:00",
                        },
                    })
                }}>
                    Update Jummah Times
                </button>
            </Article >
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
    return {
        generalActions: bindActionCreators(GeneralActions, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)