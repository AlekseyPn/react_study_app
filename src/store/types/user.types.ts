export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS"
export const LOGIN_USER_ERROR = "LOGIN_USER_ERROR"
export const LOGOUT_USER = "LOGOUT_USER"

export interface IUserState {
  username: string,
  authenticated: boolean,
  errorText?: string
}