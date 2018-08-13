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
        <header style={{ zIndex: 9999 }} id="nav">
          <CustomLink currentPathName={this.props.currentPathName} pathname='/profile' >Profile</CustomLink>
          <CustomLink currentPathName={this.props.currentPathName} pathname='/events' >Events</CustomLink>
          <CustomLink currentPathName={this.props.currentPathName} pathname='/about' >About</CustomLink>
          <CustomLink currentPathName={this.props.currentPathName} pathname='/' >Home</CustomLink>
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

class CustomLink extends React.Component {
  render() {
    return (
      <Link
        id={this.props.currentPathName === this.props.pathname ? "active" : null}
        className="li"
        to={this.props.pathname}
      >
        {this.props.children}
      </Link>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    currentPathName: state.router.location.pathname
  };
}

function mapDispatchToProps(dispatch) {
  return (
    bindActionCreators({}, dispatch)
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)