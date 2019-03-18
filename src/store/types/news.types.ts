import { ActionType } from 'typesafe-actions'
import { INewsItem } from '../../models/news'
import * as actions from '../actions/news.actions'

export const SET_NEWS = 'SET_NEWS_ITEMS'
export const SET_LOADING = 'SET_LOADING'
export const SET_ERROR = 'SET_ERROR'

export interface INewsState {
  readonly news: ReadonlyArray<INewsItem>;
  readonly loading: boolean;
  readonly errorText?: string;
}

export type NewsActions = ActionType<typeof actions>
