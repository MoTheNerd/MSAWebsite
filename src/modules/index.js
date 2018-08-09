import { combineReducers } from 'redux'

import auth from '../reducers/auth'
import events from '../reducers/events'
import general from '../reducers/general'
import posts from '../reducers/posts'
import users from '../reducers/users'

export default combineReducers({
    auth: auth,
    events: events,
    general: general,
    posts: posts,
    users: users
})