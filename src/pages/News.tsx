import React from 'react'
import NewsItem from '../components/NewsItem'
import { INewsItem } from '../models/news'

interface INewsProps {
  items: INewsItem[],
}

const News: React.FC<INewsProps> = ({ items }) => {
  return (
    <section className="news wrapper">
      <h2 className="news__title">News</h2>
      {items.map((item: INewsItem) => (
        <NewsItem data={item} key={item.id} />
      ))}
    </section>
  )
}

export default News;
