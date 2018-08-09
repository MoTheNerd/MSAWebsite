import React from 'react'

export default class NavBar extends React.Component {
    render() {
        return (
            // <div id="nav">
            <ul id="nav" style={{ right: 10, position: 'inherit' }}>
                <li id={this.props ? this.props.active == 'profile' ? "active" : null : null} >
                    <a href="/profile">
                        Login
                        </a>
                </li>
                <li id={this.props ? this.props.active == 'events' ? "active" : null : null} >
                    <a href="/events">
                        Events
                        </a>
                </li>
                <li id={this.props ? this.props.active == 'about' ? "active" : null : null} >
                    <a href="/about">
                        About
                        </a>
                </li>
                <li id={this.props ? this.props.active == 'home' ? "active" : null : null} >
                    <a href="/">
                        Home
                        </a>
                </li>
            </ul>
            // </div>
        );
    }
}