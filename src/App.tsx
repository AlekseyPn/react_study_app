import React from 'react'
// import logo from './logo.svg';
import './App.css'

interface IAppProps {
  name: string;
  site: string;
}

const App: React.FC<IAppProps> = props => {
  return (
    <div className="container">
      <h1>TZ #1 with hooks & TS</h1>
      <nav>
        <p>Navigation</p>
      </nav>
      <p>Render routes</p>
      <p>Hello, {props.name}</p>
      <p>Site: {props.site}</p>
      {props.children}
    </div>
  )
}

const Baby = () => {
  return <p>Baby component</p>
}

const RoutedApp = () => {
  return (
    <App name="Fargustian" site="alekseypn.github.io">
      <Baby />
    </App>
  )
}
export { RoutedApp }
