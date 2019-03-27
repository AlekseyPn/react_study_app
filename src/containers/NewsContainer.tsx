import { RouteComponentProps } from '@reach/router'
import React from "react";
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import News from '../pages/News'
import { IRootState } from '../store'
import { requestNews } from '../store/actions/news.async-actions'
import { NewsActions } from '../store/types/news.types'

const mapStateToProps = (state: IRootState) => ({
  items: state.news.list,
})

const mapDispatcherToProps = (dispatch: Dispatch<NewsActions>) => ({
  getNews: () => requestNews(dispatch),
})

type NewsContainerProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatcherToProps> &
  RouteComponentProps

class NewsContainer extends React.PureComponent<NewsContainerProps> {
  public componentDidMount(): void {
    this.props.getNews();
  }

  public render() {
    const {items} = this.props;
    return (
      <News items={items}/>
    )
  }
}

export default connect(mapStateToProps, mapDispatcherToProps)(NewsContainer);