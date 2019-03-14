import { navigate } from '@reach/router'
import { IUserIdentity } from '../models/user'

interface IAuthResponse {
  status: number;
  data?: any;
  errorText?: string;
}

const AUTH_STORAGE_KEY: string = 'authenticated'

const checkUserIdentity = (data: IUserIdentity) =>
  data.username === 'Admin' && data.password === '12345'

export function authenticate(data: IUserIdentity): Promise<IAuthResponse> {
  return new Promise<IAuthResponse>((resolve, reject) => {
    if (!checkUserIdentity(data)) {
      reject({
        status: 500,
        errorText: 'incorrect_login_or_password',
      })
    }
    localStorage.setItem(AUTH_STORAGE_KEY, 'true')
    resolve({
      status: 200,
      data: 'ok',
    })
  })
}

export function checkAuthStatus(): boolean {
  return JSON.parse(localStorage.getItem(AUTH_STORAGE_KEY) || '')
}

export function logout(): void {
  localStorage.removeItem(AUTH_STORAGE_KEY)
  navigate('/')
}
