import React from 'react'
import NewsItem from '../components/NewsItem'
import { INewsItem } from '../models/news'

interface INewsProps {
  items: INewsItem[],
}

const News: React.FC<INewsProps> = ({ items }) => {
  return (
    <div className="news">
      {items.map((item: INewsItem) => (
        <NewsItem data={item} key={item.id} />
      ))}
    </div>
  )
}

export default News;
