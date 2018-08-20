import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { history, store, persistor } from './store'
import App from './containers/app'
import { PersistGate } from 'redux-persist/integration/react'

import './App.css'
import 'grommet-css'
import 'uikit/dist/css/uikit.css'
import 'uikit/dist/js/uikit'


const target = document.querySelector('#root')

render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ConnectedRouter history={history}>
        <div>
          <App store={store} />
        </div>
      </ConnectedRouter>
    </PersistGate>
  </Provider>,
  target
)