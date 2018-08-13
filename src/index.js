import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import store, { history } from './store'
import App from './containers/app'
import firebase from 'firebase'
import * as fs from 'fs'

import './App.css'
import 'grommet-css'
import denv from "dotenv"
console.log(denv.config())
// require('dotenv').config({path: __dirname + '/.env'})


const _fir_options = {
  apiKey: process.env.A,
  authDomain: process.env.B,
  databaseURL: process.env.C,
  projectID: process.env.D,
  storageBucket: process.env.E,
  messagingSenderId: process.env.F,
}

console.log(_fir_options)
console.log(process.env)

// firebase.initializeApp(_fir_options)

// export var firAuth = firebase.auth()

const target = document.querySelector('#root')

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <App />
      </div>
    </ConnectedRouter>
  </Provider>,
  target
)