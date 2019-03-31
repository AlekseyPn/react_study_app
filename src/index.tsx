import React from 'react'
import ReactDOM from 'react-dom'
import RoutedApp from './App'
import './index.css'
import * as serviceWorker from './serviceWorker'
import './styles/normalize.css'

import { Provider } from 'react-redux'
import store from './store'

ReactDOM.render(
  <Provider store={store}>
    <RoutedApp />
  </Provider>,
  document.getElementById('root')
)

serviceWorker.unregister()
