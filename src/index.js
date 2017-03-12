import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import configureStore from './stores/configureStore'
import * as actions from './actions'
import Stream from './components/Stream'

const root = 'app'
const tracks = [
  { title: 'First dummy track' },
  { title: 'Second dummy track' }
]

const store = configureStore()
store.dispatch(actions.setTracks(tracks))

ReactDOM.render(
  <Provider store={ store }>
    <Stream />
  </Provider>,
  document.getElementById(root)
)

module.hot.accept()
