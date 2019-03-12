import React from 'react'
import { INewsItem } from '../models/news'

interface INewsItemProps {
  data: INewsItem;
}

const NewsItem: React.FC<INewsItemProps> = ({
  data: { link, title, timestamp, text },
}) => (
  <div className="news__item news-item">
    <div className="news-item__title">
      <a href={link} className="news-item__link" target="_blank">
        {title}
      </a>
      &nbsp;|&nbsp;
      <time className="news-item__timestamp">
        {timestamp.toLocaleDateString()}
      </time>
    </div>
    <p className="news-item__description">{text}</p>
  </div>
)

export default NewsItem
