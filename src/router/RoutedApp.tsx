import { Router } from '@reach/router'
import React from 'react'
import { connect } from 'react-redux'
import Authenticated from '../common/Authenticated'
import AppContainer from '../components/App'
import NewsContainer from '../containers/NewsContainer'
import About from '../pages/About'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Profile from '../pages/Profile'
import { IRootState } from '../store'

const mapStateToProps = (state: IRootState) => ({
  user: state.user,
})

const RoutedApp: React.FC<ReturnType<typeof mapStateToProps>> = (props) => {
  return (
    <Router>
      <AppContainer name="Aleksey Peresmekhin" site="https://github.com/AlekseyPn/" path="/">
        <Home path="/"/>
        <NewsContainer path="/news"/>
        <About path="/about/:source"/>
        <Login path="/login"/>
        <Authenticated path="/profile">
          <Profile path="/" user={props.user}/>
        </Authenticated>
      </AppContainer>
    </Router>
  )
}
export default connect(mapStateToProps)(RoutedApp)