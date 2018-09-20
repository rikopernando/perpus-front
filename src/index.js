import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'

ReactDOM.render(
        <Provider store={store}>
          <Router>
            <App />
          </Router>
        </Provider>
        ,document.getElementById('root'))
registerServiceWorker()
