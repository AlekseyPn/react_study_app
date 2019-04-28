import { Redirect, RouteComponentProps } from '@reach/router'
import React from 'react'

interface IAuthenticatedProps extends RouteComponentProps {
  checkAuthStatus: () => boolean;
}

const Authenticated: React.FC<IAuthenticatedProps> = ({ children, checkAuthStatus }) =>
  checkAuthStatus() ? (
    <React.Fragment>{children}</React.Fragment>
  ) : (
    <Redirect to="/login" noThrow={true} />
  )

export default Authenticated
