import { USER_STORAGE_KEY } from '../../api/auth'
import { IUser } from '../../models/user'
import { UserActions } from '../actions/user.actions'
import { IUserState } from '../types/user.types'

const getUserState = (): IUserState => {
  const storageUser: string | null = localStorage.getItem(USER_STORAGE_KEY)
  const currentUser: IUser = storageUser ? JSON.parse(storageUser) : null
  return {
    username: currentUser ? currentUser.username : '',
    authenticated: currentUser ? currentUser.authenticated: false,
    errorText: undefined,
  }
}
const initialState: IUserState = getUserState();
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