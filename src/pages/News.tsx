import { RouteComponentProps } from '@reach/router'
import React from 'react'
import { getNews } from '../api/News'
import NewsItem from '../components/NewsItem'
import { INewsItem } from '../models/news'

const News: React.FC<RouteComponentProps> = () => {
  const [news, setNews] = React.useState<INewsItem[]>([])

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
