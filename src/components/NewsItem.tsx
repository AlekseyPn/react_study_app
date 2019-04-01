import React from 'react'
import { INewsItem } from '../models/news'
import "../styles/components/NewsItem.css"

interface INewsItemProps {
  data: INewsItem;
}

const NewsItem: React.FC<INewsItemProps> = ({
  data: { link, title, timestamp, text },
}) => (
  <article className="news__item news-item">
    <div className="news-item__title">
      <a href={link} className="news-item__link" target="_blank">
        {title}
      </a>
    </div>
    <div className="news-item__timestamp">
      Published:
      <time>
        {timestamp.toLocaleDateString()}
      </time>
    </div>
    <p className="news-item__description">{text}</p>
    <a href={link} className="news-item__read-more" target="_blank">READ MORE</a>
  </article>
)

export default NewsItem
