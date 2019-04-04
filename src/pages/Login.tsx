/* tslint:disable:no-console */
import { navigate, RouteComponentProps } from '@reach/router'
import React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { USER_STORAGE_KEY } from '../api/auth'
import { IUserIdentity } from '../models/user'
import { IRootState } from '../store'
import { loginError, loginUser, UserActions } from '../store/actions/user.actions'
import "../styles/pages/Login.css"

const mapStateToProps = (state: IRootState) => ({
  errorText: state.user.errorText
})

const mapDispatcherToProps = (dispatch: Dispatch<UserActions>) => ({
  authenticate: (user: IUserIdentity) => loginUser(dispatch, user),
  setNotification: (notification: string) => dispatch(loginError(notification))
});

type LoginProps = ReturnType<typeof mapDispatcherToProps> & ReturnType<typeof mapStateToProps> &
  RouteComponentProps

const Login: React.FC<LoginProps> = ({ authenticate, errorText, setNotification }) => {
  const [user, setField] = React.useState<IUserIdentity>({
    username: '',
    password: '',
  })

  const onInputChange = (fieldName: string) => (
    e: React.SyntheticEvent<HTMLInputElement>,
  ): void => {
    setNotification('')
    setField({ ...user, [fieldName]: e.currentTarget.value })
  }

  const onSubmit = (e: React.SyntheticEvent<HTMLFormElement>): void => {
    e.preventDefault()
    authenticate(user)
      .then(() => {
        localStorage.removeItem(USER_STORAGE_KEY);
        localStorage.setItem(USER_STORAGE_KEY, JSON.stringify({username: user.username, authenticated: true}))
        setNotification('')
        navigate('/profile')
      })
      .catch(err => {
          // tslint:disable-next-line: no-console
          console.warn('request problem', err)
      })
  }

  return (
    <section className="wrapper login">
      <h2 className="login__title">Login</h2>
      <form onSubmit={onSubmit} className="login-form">
        {errorText ? <p className="login-form__error">{errorText}</p> : null}
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
    </section>
  )
}

export default connect(mapStateToProps, mapDispatcherToProps)(Login)
