import { Dispatch } from 'react'
import { action, ActionType } from 'typesafe-actions'
import { authenticate } from '../../api/auth'
import { IUser, IUserIdentity } from '../../models/user'
import { LOGIN_USER_ERROR, LOGIN_USER_SUCCESS, LOGOUT_USER } from '../types/user.types'

export const loginSuccess = (user: IUser) => action(LOGIN_USER_SUCCESS, user)
export const loginError = (errorText: string) => action(LOGIN_USER_ERROR, errorText)
export const logout = () => action(LOGOUT_USER, { username: '', authenticated: false })

export type UserActions = ActionType<typeof loginError | typeof loginSuccess | typeof logout>;

export const loginUser = async (dispatch: Dispatch<UserActions>, user: IUserIdentity) => {
  try {
    await authenticate(user)
    dispatch(loginSuccess({ username: user.username, authenticated: true }))
  } catch (e) {
    dispatch(loginError(e.errorText))
    throw new Error(e)
  }
}