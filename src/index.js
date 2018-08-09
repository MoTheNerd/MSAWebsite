import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, combineReducers } from 'redux';
import registerServiceWorker from './registerServiceWorker';
import { Route } from 'react-router'
import { BrowserRouter, Switch } from 'react-router-dom'

import users from './reducers/users';
import auth from './reducers/auth';
import events from './reducers/events';
import general from './reducers/general';
import posts from './reducers/posts';


import AboutScreen from './screens/AboutScreen';
import EventsScreen from './screens/EventsScreen';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';

const store = createStore(
    combineReducers({
        auth: auth,
        events: events,
        general: general,
        posts: posts,
        users: users
    }), { /*insert initial state here please*/ }
)

console.log("Store Initial State: ", store.getState())
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
    document.getElementById('root')
);
registerServiceWorker();
