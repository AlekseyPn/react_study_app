import { Redirect, RouteComponentProps } from '@reach/router'
import React from 'react'
import { checkAuthStatus } from '../api/auth'

const Authenticated: React.FC<RouteComponentProps> = ({ children }) =>
  checkAuthStatus() ? (
    <React.Fragment>{children}</React.Fragment>
  ) : (
    <Redirect to="/login" noThrow={true} />
  )

export default Authenticated
