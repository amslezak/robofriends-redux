import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import 'tachyons'
import App from './containers/App.jsx'
import './index.css'
import { requestRobots, searchRobots } from './reducers'
import registerServiceWorker from './registerServiceWorker'

const logger = createLogger()

const rootReducer = combineReducers({
  searchRobots,
  requestRobots,
})

const store = createStore(rootReducer, applyMiddleware(thunk, logger))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
