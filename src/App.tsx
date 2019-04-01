import { Link, LinkGetProps, navigate, RouteComponentProps, Router } from '@reach/router'
import React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { checkAuthStatus, USER_STORAGE_KEY } from './api/auth'
import './App.css'
import Authenticated from './common/Authenticated'
import AppFooter from './components/AppFooter'
import NewsContainer from './containers/NewsContainer'
import logo from './images/react-logo.svg'
import About from './pages/About'
import Home from './pages/Home'
import Login from './pages/Login'
import Profile from './pages/Profile'
import { IRootState } from './store'
import { logout, UserActions } from './store/actions/user.actions'

const mapStateToProps = (state: IRootState) => ({
  user: state.user,
})

const mapDispatcherToProps = (dispatch: Dispatch<UserActions>) => ({
  logout: () => dispatch(logout()),
})

interface IAppProps extends RouteComponentProps {
  name: string;
  site: string;
  logout: typeof logout
}

const isCurrentRoute = ({ isCurrent }: LinkGetProps): any => {
  return isCurrent ? { className: 'app-nav__link app-nav__link--active' } : null
}
const App: React.FC<IAppProps> = props => {
  function onLogoutClick() {
    props.logout()
    localStorage.removeItem(USER_STORAGE_KEY)
    navigate('/')
  }

  return (
      <div className="app-wrapper">
        <header className="app-header">
          <h1 className="app-title visually-hidden">React App with TS</h1>
          <div className="app-logo">
            <img src={logo} alt="React logo"/>
          </div>
          <nav className="app-nav">
            <Link className="app-nav__link" to="/" getProps={isCurrentRoute}>Home</Link>
            <Link className="app-nav__link" to="news" getProps={isCurrentRoute}>News</Link>
            <Link className="app-nav__link" to="/about/habr" getProps={isCurrentRoute}>About habr</Link>
            <Link className="app-nav__link" to="/profile" getProps={isCurrentRoute}>Profile</Link>
            {checkAuthStatus() ? (
              <button onClick={onLogoutClick} className="logout">
                Logout
              </button>
            ) : null}
          </nav>
        </header>
        <main className="app-main">
          <div className="container">
            {props.children}
          </div>
        </main>
        <AppFooter name={props.name}/>
      </div>
  )
}

const AppContainer = connect(null, mapDispatcherToProps)(App)

const RoutedApp: React.FC<ReturnType<typeof mapStateToProps>> = (props) => {
  return (
    <Router>
      <AppContainer name="Aleksey Peresmekhin" site="https://github.com/AlekseyPn/" path="/">
        <Home path="/"/>
        <NewsContainer path="/news"/>
        <About path="/about/:source"/>
        <Login path="/login"/>
        <Authenticated path="/profile">
          <Profile path="/" user={props.user}/>
        </Authenticated>
      </AppContainer>
    </Router>
  )
}
export default connect(mapStateToProps)(RoutedApp)
