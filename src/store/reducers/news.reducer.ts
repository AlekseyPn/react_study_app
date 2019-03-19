import {
  INewsState,
  NewsActions,
  SET_ERROR,
  SET_LOADING,
  SET_NEWS,
} from '../types/news.types'

const initialState: INewsState = {
  list: [],
  loading: false,
  errorText: undefined,
}

export function news(state = initialState, action: NewsActions): INewsState {
  switch (action.type) {
    case SET_NEWS: {
      return {
        ...state,
        list: [...action.payload.list],
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
