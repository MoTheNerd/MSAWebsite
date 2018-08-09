import React from 'react';
import NavBar from '../components/NavBar'

export default class EventsScreen extends React.Component {
    render() {
        return (
            <div>
                <NavBar active="events" />
            </div>
        );
    }
}