import { Link, LinkGetProps } from '@reach/router'
import React from 'react'
import { checkAuthStatus } from '../api/auth'
import '../styles/components/AppNavigation.css'

const isCurrentRoute = ({ isCurrent }: LinkGetProps): any => {
  return isCurrent ? { className: 'app-nav__link app-nav__link--active' } : null
}

interface ILinkNavProps {
  to: string
}

const NavLink: React.FC<ILinkNavProps> = (props) => {
  return <Link className="app-nav__link" {...props} getProps={isCurrentRoute}/>
}

interface IAppNavigationProps {
  onClick: () => void,
  isHidden: boolean
}

const AppNavigation: React.FC<IAppNavigationProps> = (props) => {
  return <nav className={`app-nav ${!props.isHidden ? 'app-nav--show' : ''}`}>
    <NavLink to="/">Home</NavLink>
    <NavLink to="news">News</NavLink>
    <NavLink to="/about/habr">About habr</NavLink>
    <NavLink to="/profile">Profile</NavLink>
    {checkAuthStatus() ? (
      <button onClick={props.onClick} className="logout">
        Logout
      </button>
    ) : null}
  </nav>
}

export default AppNavigation