import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { history, store, persistor } from './store'
import App from './containers/app'
import { PersistGate } from 'redux-persist/integration/react'

it('renders without crashing', () => {
  const div = document.createElement('div');
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
    div
  );
  unmountComponentAtNode(div);
});