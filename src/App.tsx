import { Link, RouteComponentProps, Router } from '@reach/router'
import React from 'react'
import { checkAuthStatus, logout } from './api/auth'
import './App.css'
import Authenticated from './common/Authenticated'
import NewsContainer from './containers/NewsContainer'
import About from './pages/About'
import Login from './pages/Login'
import Profile from './pages/Profile'

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
        <Link to="/profile">Profile</Link>
        {'  '}
        {checkAuthStatus() ? (
          <button onClick={logout} className="logout">
            Logout
          </button>
        ) : null}
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
        <NewsContainer path="/news" />
        <About path="/about/:source" />
        <Login path="/login" />
        <Authenticated path="/profile">
          <Profile path="/" />
        </Authenticated>
      </App>
    </Router>
  )
}
export { RoutedApp }
