import { RouteComponentProps } from '@reach/router'
import React from 'react'
import { getNews } from '../api/News'
import NewsItem from '../components/NewsItem'
import { INewsItem } from '../models/news'

const News: React.FC<RouteComponentProps> = () => {
  const [news, setNews] = React.useState<INewsItem[]>([])
  // todo use action in effect by connect https://stackoverflow.com/questions/54632520/how-to-fetch-data-by-existing-redux-action-with-hooks
  React.useEffect(() => {
    getNews()
      .then(response => {
        setNews(response.data)
      })
      .catch(err => {
        // tslint:disable-next-line: no-console
        console.warn(err)
        throw new Error('Getting news problem')
      })
  }, [])
  return (
    <div className="news">
      {news.map(item => (
        <NewsItem data={item} key={item.id} />
      ))}
    </div>
  )
}

export default News
