import { Redirect } from '@reach/router'
import { shallow } from 'enzyme'
import React from 'react'
import Authenticated from '../Authenticated'

const checkAuthStatusMock = jest.fn();
const MockComponent = () => <span>I'm mock</span>

describe('Authenticated', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })
  it('invokes checkAuthStatus', () => {
    checkAuthStatusMock.mockReturnValue(false)
    shallow(<Authenticated checkAuthStatus={checkAuthStatusMock}/>)
    expect(checkAuthStatusMock).toHaveBeenCalled()
  })

  it('render mocked Redirect', () => {
    checkAuthStatusMock.mockReturnValue(false)
    const container = shallow(<Authenticated checkAuthStatus={checkAuthStatusMock}/>)
    expect(container.find(Redirect)).toHaveLength(1)
  })

  it('render mocked Redirect', () => {
    checkAuthStatusMock.mockReturnValue(true)
    const container = shallow(<Authenticated checkAuthStatus={checkAuthStatusMock}>
      <MockComponent/>
    </Authenticated>)
    expect(container.find(MockComponent)).toHaveLength(1)
  })
})