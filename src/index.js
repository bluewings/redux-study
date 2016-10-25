import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import counterApp from './reducers'

const INCREMENT = 'INCREMENT'

function increase (diff) {
  return {
    type: INCREMENT,
    addBy: diff
  }
}

const initialState = {
  value: 0
}

const counterReducer = (state = initialState , action) => {
  switch (action.type) {
    case INCREMENT:
      return Object.assign({}, state, {
        value: state.value + action.addBy
      })
    default:
      return state
  }
}

const store = createStore(counterApp)
const rootElement = document.getElementById('root')

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  rootElement)
