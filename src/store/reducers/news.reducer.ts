import {
  INewsState,
  NewsActions,
  SET_ERROR,
  SET_LOADING,
  SET_NEWS,
} from '../types/news.types'

const initialState: INewsState = {
  news: [],
  loading: false,
  errorText: undefined,
}

export function news(state = initialState, action: NewsActions): INewsState {
  switch (action.type) {
    case SET_NEWS: {
      return {
        news: [...state.news, ...action.payload.news],
        ...state,
      }
    }
    case SET_LOADING: {
      return {
        ...state,
        loading: action.payload.loading,
      }
    }
    case SET_ERROR: {
      return {
        ...state,
        errorText: action.payload.errorText,
      }
    }
    default:
      return state
  }
}
