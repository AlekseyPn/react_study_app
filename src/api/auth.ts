import { IUserIdentity } from '../models/user'

interface IAuthResponse {
  status: number;
  data?: any;
  errorText?: string;
}

export const USER_STORAGE_KEY: string = 'user'

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
    resolve({
      status: 200,
      data: 'ok',
    })
  })
}

export function checkAuthStatus(): boolean {
  const userInfo: string | null = localStorage.getItem(USER_STORAGE_KEY)
  return userInfo && JSON.parse(userInfo).authenticated
}
