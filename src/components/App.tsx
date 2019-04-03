import { navigate, RouteComponentProps } from '@reach/router'
import React, { SyntheticEvent, useState } from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { USER_STORAGE_KEY } from '../api/auth'
import logo from '../images/react-logo.svg'
import { logout, UserActions } from '../store/actions/user.actions'
import '../styles/App.css'
import AppFooter from './AppFooter'
import AppNavigation from './AppNavigation'


const mapDispatcherToProps = (dispatch: Dispatch<UserActions>) => ({
  logout: () => dispatch(logout()),
})

interface IAppProps extends RouteComponentProps {
  name: string;
  site: string;
  logout: typeof logout
}

const App: React.FC<IAppProps> = props => {

  const [isHidden, setIsHidden] = useState(true);

  function onLogoutClick() {
    props.logout()
    localStorage.removeItem(USER_STORAGE_KEY)
    navigate('/')
  }

  function toggleClass(evt: SyntheticEvent) {
    evt.currentTarget.classList.toggle('is-active')
    setIsHidden(!evt.currentTarget.classList.contains('is-active'))
  }

  return (
    <div className="app-wrapper">
      <header className="app-header">
        <h1 className="app-title visually-hidden">React App with TS</h1>
        <div className="app-logo">
          <img src={logo} alt="React logo"/>
        </div>
        <div className="mobile-nav-control">
          <div className="hamburger" onClick={toggleClass}>
            <span className="line"/>
            <span className="line"/>
            <span className="line"/>
          </div>
        </div>
        <AppNavigation onClick={onLogoutClick} isHidden={isHidden}/>
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

export default AppContainer
