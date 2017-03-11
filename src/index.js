import React from 'react'
import ReactDOM from 'react-dom'

import Stream from './components/Stream'

const root = 'app'
const tracks = [
  { title: 'First dummy track' },
  { title: 'Second dummy track' }
]

ReactDOM.render(
  <Stream tracks={ tracks } />,
  document.getElementById(root)
)

module.hot.accept()
