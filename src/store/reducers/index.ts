import { combineReducers } from 'redux'
import news from './news.reducer'
import user from './user.reducer'

export default combineReducers({ news, user })
