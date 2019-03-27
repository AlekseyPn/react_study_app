export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS"
export const LOGIN_USER_ERROR = "LOGIN_USER_ERROR"

export interface IUserState {
  username: string,
  authenticated: boolean,
  errorText?: string
}