import { Dispatch } from 'react'
import { action, ActionType } from "typesafe-actions";
import { authenticate } from '../../api/auth'
import { IUser, IUserIdentity } from '../../models/user'
import { LOGIN_USER_ERROR, LOGIN_USER_SUCCESS } from '../types/user.types'

export const loginSuccess = (user: IUser) => action(LOGIN_USER_SUCCESS, user);
export const loginError = (errorText: string) => action(LOGIN_USER_ERROR, errorText)

export type UserActions = ActionType<typeof loginError | typeof loginSuccess>;

export const loginUser = async (dispatch: Dispatch<UserActions>, user: IUserIdentity) => {
  try {
    await authenticate(user)
    dispatch(loginSuccess({username: user.username, authenticated: true}))
  } catch (e) {
    dispatch(loginError(e.errorText))
  }
}