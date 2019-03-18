import { Dispatch } from 'redux'
import { getNews } from '../../api/News'
import { NewsActions } from '../types/news.types'
import { setError, setLoading, setNews } from './news.actions'

export async function requestNews(dispatch: Dispatch<NewsActions>) {
  dispatch(setLoading(true))
  try {
    const { data } = await getNews()
    dispatch(setNews(data))
  } catch (e) {
    dispatch(setError(e.errorText))
  } finally {
    dispatch(setLoading(false))
  }
}
