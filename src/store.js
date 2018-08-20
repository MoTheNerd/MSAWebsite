import { createStore, applyMiddleware, compose } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import { rootReducer, rootSaga } from './modules'
import createSagaMiddleware from 'redux-saga';

export const history = createHistory()

const sagaMiddleWare = createSagaMiddleware(rootSaga);

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const initialState = {}
const enhancers = []
const middleware = [
  thunk,
  routerMiddleware(history),
  sagaMiddleWare
]

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)

export const store = createStore(
  connectRouter(history)(persistedReducer),
  initialState,
  composedEnhancers
)

sagaMiddleWare.run(rootSaga)
export let persistor = persistStore(store)