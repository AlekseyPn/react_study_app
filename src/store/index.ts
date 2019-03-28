import { applyMiddleware, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import rootReducers from './reducers'
import { INewsState } from './types/news.types'
import { IUserState } from './types/user.types'

const logger = createLogger({
  duration: true,
})

export interface IRootState {
  news: INewsState;
  user: IUserState;
}

const store = createStore<IRootState, any, any, any>(
  rootReducers,
  applyMiddleware(thunkMiddleware, logger)
)

export default store
