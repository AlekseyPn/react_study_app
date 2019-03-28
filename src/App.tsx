import { Link, navigate, RouteComponentProps, Router } from '@reach/router'
import React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { checkAuthStatus, USER_STORAGE_KEY } from './api/auth'
import './App.css'
import Authenticated from './common/Authenticated'
import NewsContainer from './containers/NewsContainer'
import About from './pages/About'
import Login from './pages/Login'
import Profile from './pages/Profile'
import { IRootState } from './store'
import { logout, UserActions } from './store/actions/user.actions'

const mapStateToProps = (state: IRootState) => ({
  user: state.user,
})

const mapDispatcherToProps = (dispatch: Dispatch<UserActions>) => ({
  logout: () => dispatch(logout())
})

interface IAppProps extends RouteComponentProps {
  name: string;
  site: string;
  logout: typeof logout
}

const App: React.FC<IAppProps> = props => {
  function onLogoutClick() {
    props.logout()
    localStorage.removeItem(USER_STORAGE_KEY)
    navigate('/')
  }
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
          <button onClick={onLogoutClick} className="logout">
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

const AppContainer = connect(null, mapDispatcherToProps)(App)

const RoutedApp: React.FC<ReturnType<typeof mapStateToProps>> = (props) => {
  return (
    <Router>
      <AppContainer name="Fargustian" site="alekseypn.github.io" path="/">
        <NewsContainer path="/news" />
        <About path="/about/:source" />
        <Login path="/login" />
        <Authenticated path="/profile">
          <Profile path="/" user={props.user}/>
        </Authenticated>
      </AppContainer>
    </Router>
  )
}
export default connect(mapStateToProps)(RoutedApp)
