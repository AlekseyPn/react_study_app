import { UserActions } from '../actions/user.actions'
import { IUserState } from '../types/user.types'

const initialState: IUserState = {
  username: '',
  authenticated: false,
  errorText: undefined,
}
export default function(state = initialState, action: UserActions): IUserState {
  switch (action.type) {
    case 'LOGIN_USER_SUCCESS':
      return {
        ...state,
        ...action.payload,
      }
    case 'LOGIN_USER_ERROR':
      return {
        ...state,
        errorText: action.payload,
      }
    default:
      return state
  }
}