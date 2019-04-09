import deepFreeze from 'deep-freeze'
import { action } from 'typesafe-actions'
import { INewsState, SET_ERROR, SET_LOADING, SET_NEWS } from '../../types/news.types'
import news from '../news.reducer'

const initialState: INewsState = {
  list: [],
  loading: false,
  errorText: undefined,
}

const fakeItem = {
  id: 1,
  title: 'Делаем CRUD приложение с помощью React-hooks',
  text: 'В данном конспекте создается простое CRUD-приложение без бэкэнда',
  link:
    'https://maxpfrontend.ru/perevody/delaem-crud-prilozhenie-s-pomoschyu-react-hooks/',
  timestamp: new Date('01-15-2019'),
}

describe('news Reducers', () => {
  beforeAll(() => {
    deepFreeze(initialState)
  })
  it('SET_NEWS success', () => {
    const setNews = action(SET_NEWS, { list:
      [fakeItem],
    })
    deepFreeze(setNews)

    expect(news(initialState, setNews).list).toHaveLength(1)
    expect(news(initialState, setNews).list[0]).toEqual(fakeItem)
  })
  it('SET_LOADING success', () => {
    const setLoading = action(SET_LOADING, { loading: true,
    })
    deepFreeze(setLoading)
    expect(news(initialState, setLoading).loading).toBeTruthy()
  })
  it('SET_ERROR success', () => {
    const mockMessage = "error text for test"
    const setErrorText = action(SET_ERROR, { errorText: mockMessage,
    })
    deepFreeze(setErrorText)

    expect(news(initialState, setErrorText).errorText).toBe(mockMessage)
  })
})

