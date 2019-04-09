import deepFreeze from 'deep-freeze'
import { action } from 'typesafe-actions'
import { IUserState, LOGIN_USER_ERROR, LOGIN_USER_SUCCESS, LOGOUT_USER } from '../../types/user.types'
import user from '../user.reducer'

const initialState: IUserState = {
  username: '',
  authenticated: false,
  errorText: undefined,
}

const mockUserState = { username: 'Admin', authenticated: true }

describe('user Reducers', () => {
  beforeAll(() => {
    deepFreeze(initialState)
  })
  it('LOGIN_USER_SUCCESS', () => {
    const loginSuccessAction = action(LOGIN_USER_SUCCESS, mockUserState)
    deepFreeze(loginSuccessAction)
    expect(user(initialState, loginSuccessAction)).toEqual({ ...mockUserState, errorText: undefined })
  })
  it('LOGIN_USER_ERROR success', () => {
    const errorText = 'some error at login'
    const loginErrorAction = action(LOGIN_USER_ERROR, errorText)
    deepFreeze(loginErrorAction)
    expect(user(initialState, loginErrorAction).errorText).toBe(errorText)
  })
  it('LOGOUT', () => {
    const logoutAction = action(LOGOUT_USER)
    deepFreeze(logoutAction)
    expect(user({
      username: 'Test user',
      authenticated: true,
      errorText: undefined,
    }, logoutAction)).toEqual(initialState)
  })
})