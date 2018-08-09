import React from 'react';
import { Route, Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Home from '../screens/HomeScreen'
import Events from '../screens/EventsScreen'
import Profile from '../screens/ProfileScreen'
import About from '../screens/AboutScreen'


class App extends React.Component {
  render() {
    return (
      <div>
        <header id="nav">
          <Link id={this.props ? this.props.currentPathName === '/profile' ? "active" : null : null} className="li" to="/profile">Profile</Link>
          <Link id={this.props ? this.props.currentPathName === '/events' ? "active" : null : null} className="li" to="/events">Events</Link>
          <Link id={this.props ? this.props.currentPathName === '/about' ? "active" : null : null} className="li" to="/about">About</Link>
          <Link id={this.props ? this.props.currentPathName === '/' ? "active" : null : null} className="li" to="/">Home</Link>
        </header>

        <main>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/events" component={Events} />
          <Route exact path="/profile" component={Profile} />
        </main>
      </div>
    )
  }
}

function mapStateToProps(state, props) {
  return {
    currentPathName: state.router.location.pathname
  };
}

function mapDispatchToProps(dispatch) {
  bindActionCreators({}, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)