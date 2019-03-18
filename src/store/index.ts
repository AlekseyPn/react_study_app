import { applyMiddleware, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import rootReducers from './reducers'

const logger = createLogger({
  duration: true,
})

const store = createStore(
  rootReducers,
  applyMiddleware(thunkMiddleware, logger)
)

export default store
