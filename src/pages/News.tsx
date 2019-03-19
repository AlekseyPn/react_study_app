import { RouteComponentProps } from '@reach/router'
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import NewsItem from '../components/NewsItem'
import { INewsItem } from '../models/news'
import { IRootState } from '../store'
import { requestNews } from '../store/actions/news.async-actions'
import { NewsActions } from '../store/types/news.types'

const mapStateToProps = (state: IRootState) => ({
  items: state.news.list,
})

const mapDispatcherToProps = (dispatch: Dispatch<NewsActions>) => ({
  getNews: () => requestNews(dispatch),
})

type NewsProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatcherToProps> &
  RouteComponentProps

const News: React.FC<NewsProps> = props => {
  useEffect(() => {
    props.getNews()
  }, [props.items.length])
  return (
    <div className="news">
      {props.items.map((item: INewsItem) => (
        <NewsItem data={item} key={item.id} />
      ))}
    </div>
  )
}

export default connect(
  mapStateToProps,
  mapDispatcherToProps
)(News)
