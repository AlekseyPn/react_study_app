import { action } from 'typesafe-actions'
import { INewsItem } from '../../models/news'
import { SET_ERROR, SET_LOADING, SET_NEWS } from '../types/news.types'

export const setNews = (list: INewsItem[]) => action(SET_NEWS, { list })
export const setLoading = (loading: boolean) => action(SET_LOADING, { loading })
export const setError = (errorText: string) => action(SET_ERROR, { errorText })
