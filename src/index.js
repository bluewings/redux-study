import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import App from './components/App'
// import DevTools from './containers/DevTools'
import Bootstrap from 'bootstrap/dist/css/bootstrap.css'

const store = configureStore()
const rootElement = document.getElementById('root')

ReactDOM.render(
  <Provider store={store}>
    <div>
      <App />
      {/* <DevTools /> */}
    </div>
  </Provider>,
  rootElement
)
