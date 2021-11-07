import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import store from './store'
import { Provider } from 'mobx-react'

ReactDOM.render(
  <Provider {...store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
