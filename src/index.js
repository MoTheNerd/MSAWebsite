import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, combineReducers } from 'redux';
import registerServiceWorker from './registerServiceWorker';

import users from './reducers/users';
import auth from './reducers/auth';
import events from './reducers/events';
import general from './reducers/general';
import posts from './reducers/posts';


const store = createStore(
    combineReducers({
        auth: auth,
        events: events,
        general: general,
        posts: posts,
        users: users
    }), {/*insert initial state here please*/}
)

console.log("Store Initial State: ", store.getState())
ReactDOM.render(<App store={store} />, document.getElementById('root'));
registerServiceWorker();
