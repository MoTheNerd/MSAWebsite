import React from 'react';
import { Route, Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Article, Header, Box } from 'grommet';
import Button from "material-kit-react/components/CustomButtons/Button"

import Home from '../screens/HomeScreen'
import Events from '../screens/EventsScreen'
import Profile from '../screens/ProfileScreen'
import Login from '../screens/LoginScreen'
import About from '../screens/AboutScreen'
import Error404 from '../screens/Error404'

class App extends React.Component {
  render() {
    return (
      <div>
        <Article>
          <Header style={{ zIndex: 9999 }} id="nav">
            <Box direction="row">
              <CustomLink currentPathName={this.props.currentPathName} pathname='/' >Home</CustomLink>
              <CustomLink currentPathName={this.props.currentPathName} pathname='/about' >About</CustomLink>
              <CustomLink currentPathName={this.props.currentPathName} pathname='/events' >Events</CustomLink>
              <CustomLink currentPathName={this.props.currentPathName} pathname='/profile' >Profile</CustomLink>
            </Box>
          </Header>
        </Article>
        <main>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/events" component={Events} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/profile/me" component={Profile}></Route>
          <Route exact path="/profile/events" component={Profile}></Route>
          <Route exact path="/profile/prayers" component={Profile}></Route>
          <Route exact path="/profile/about" component={Profile}></Route>
          <Route exact path="/profile/login" component={Login} />
          <Route exact path="/profile/signup" component={Login} />
          <Route component={Error404}/>
        </main>
      </div>
    )
  }
}

class CustomLink extends React.Component {
  render() {
    var active;
    if ("/" + this.props.currentPathName.split("/")[1] === this.props.pathname) {
      active = true
    } else if (this.props.currentPathName === "/") {
      this.props.currentPathName === this.props.pathname ? active = true : null
    }

    return (
      [<span style={{ width: "0.5em" }} />,
      <Button round to={this.props.pathname} component={Link} color="github" simple={active ? false : true}>{this.props.children}</Button>,
      <span style={{ width: "0.5em" }} />]
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