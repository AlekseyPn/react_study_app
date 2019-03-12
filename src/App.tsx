import { Link, RouteComponentProps, Router } from '@reach/router'
import React from 'react'
// import logo from './logo.svg';
import './App.css'
import About from './pages/About'
import News from './pages/News'

interface IAppProps extends RouteComponentProps {
  name: string;
  site: string;
}

const App: React.FC<IAppProps> = props => {
  return (
    <div className="container">
      <h1>TZ #1 with hooks & TS</h1>
      <nav>
        <Link to="/">Home</Link>
        {'  '}
        <Link to="news">News</Link>
        {'  '}
        <Link to="/about/habr">About habr</Link>
        {'  '}
      </nav>
      <p>
        {'  '}
        Author: {props.name} | Site: {props.site}
      </p>
      <hr />
      {props.children}
    </div>
  )
}

const RoutedApp = () => {
  return (
    <Router>
      <App name="Fargustian" site="alekseypn.github.io" path="/">
        <News path="/news" />
        <About path="/about/:source" />
      </App>
    </Router>
  )
}
export { RoutedApp }
