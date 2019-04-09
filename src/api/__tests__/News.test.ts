import { getNews } from '../News'

describe('News api', () => {
  it('response to have length', async () => {
    const { data } = await getNews();
    expect(data).toHaveLength(3);
    expect.assertions(1);
  })

  it('response model is correct', async () => {
    const { data } = await getNews();
    expect(data[0]).toEqual({
      id: 1,
      title: 'Делаем CRUD приложение с помощью React-hooks',
      text: 'В данном конспекте создается простое CRUD-приложение без бэкэнда',
      link:
        'https://maxpfrontend.ru/perevody/delaem-crud-prilozhenie-s-pomoschyu-react-hooks/',
      timestamp: new Date('01-15-2019'),
    })
  })
})