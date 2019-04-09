import { authenticate, checkAuthStatus, USER_STORAGE_KEY } from '../auth'

jest.mock('../../localization/localization')

describe('Auth module', () => {
  it('user to be authenticate', async () => {
    const response = await authenticate({ username: 'Admin', password: '12345' })
    expect(response).toEqual({
      status: 200,
      data: 'ok',
    })
    expect.assertions(1)
  })

  it('user not ot be authenticate', async () => {
    try {
      await authenticate({ username: 'SomeWrongUser', password: '12345' })
    } catch (e) {
      expect(e).toEqual({
        status: 500,
        errorText: "Имя пользователя или пароль введены не верно",
      })
      expect.assertions(1)
    }
  })

  it('auth status checks correct', () => {
    localStorage.setItem(USER_STORAGE_KEY, JSON.stringify({ username: 'Admin', authenticated: true }))
    expect(checkAuthStatus()).toBeTruthy()
  })

  it('auth status checks correct', () => {
    localStorage.setItem(USER_STORAGE_KEY, "")
    expect(checkAuthStatus()).toBeFalsy()
  })
})