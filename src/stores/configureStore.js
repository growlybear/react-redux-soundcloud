import { createStore, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'

import rootReducer from '../reducers/index'

const logger = createLogger()
const createStoreWithMiddleware = applyMiddleware(logger)(createStore)

// cf. https://github.com/reactjs/react-redux/releases/tag/v2.0.0
// cf. https://www.youtube.com/watch?v=aXG1CRVnDdM
export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(rootReducer, initialState)

  if (module.hot) {
    // enable webpack HMR replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers/index')
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
