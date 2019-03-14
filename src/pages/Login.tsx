import { navigate, RouteComponentProps } from '@reach/router'
import React from 'react'
import { authenticate } from '../api/auth'
import { IUserIdentity } from '../models/user'

const Login: React.FC<RouteComponentProps> = () => {
  const [user, setField] = React.useState<IUserIdentity>({
    username: '',
    password: '',
  })

  const [notification, setNotification] = React.useState<string>('')

  const onInputChange = (fieldName: string) => (
    e: React.SyntheticEvent<HTMLInputElement>
  ): void => {
    setField({ ...user, [fieldName]: e.currentTarget.value })
    setNotification('')
  }

  const onSubmit = (e: React.SyntheticEvent<HTMLFormElement>): void => {
    e.preventDefault()
    authenticate(user)
      .then(() => navigate('/profile'))
      .catch(err => {
        if (err.errorText) {
          setNotification(err.errorText)
        } else {
          // tslint:disable-next-line: no-console
          console.warn('request problem', err)
        }
      })
  }

  return (
    <>
      <h2>Login</h2>
      <form onSubmit={onSubmit} className="form login-form">
        {notification ? <p>{notification}</p> : null}
        <div className="login-form__group">
          <label htmlFor="login" className="login-form__label">
            Your login
          </label>
          <input
            type="text"
            id="login"
            name="login"
            className="login-form__control"
            onChange={onInputChange('username')}
          />
        </div>
        <div className="login-form__group">
          <label htmlFor="password" className="login-form__label">
            Your password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="login-form__control"
            onChange={onInputChange('password')}
          />
        </div>
        <div className="login-form__group login-form__submit">
          <button className="login-form__submit-btn" type="submit">
            Submit
          </button>
        </div>
      </form>
    </>
  )
}

export default Login
