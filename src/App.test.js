import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Route } from 'react-router'
import { BrowserRouter, Switch } from 'react-router-dom'

import AboutScreen from './screens/AboutScreen';
import EventsScreen from './screens/EventsScreen';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/about" component={AboutScreen} />
            <Route path="/events" component={EventsScreen} />
            <Route path="/profile" component={ProfileScreen} />
            <Route path="/" component={HomeScreen} />
        </Switch>
    </BrowserRouter>,
    // <App store={store} />,
    div
);
  ReactDOM.unmountComponentAtNode(div);
});
