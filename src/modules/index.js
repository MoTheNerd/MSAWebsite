import { combineReducers } from 'redux'

import { all } from 'redux-saga/effects'

import authR from '../reducers/auth'
import eventsR from '../reducers/events'
import generalR from '../reducers/general'
import postsR from '../reducers/posts'
import usersR from '../reducers/users'

// import authS from '../sagas/auth'
// import eventsS from '../sagas/events'
import generalS from '../sagas/general'
// import postsS from '../sagas/posts'
// import usersS from '../sagas/users'

export const rootReducer = combineReducers({
    auth: authR,
    events: eventsR,
    general: generalR,
    posts: postsR,
    users: usersR
})


export function* rootSaga() {
    yield all([
        ...generalS,
    ])
}