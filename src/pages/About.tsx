import { RouteComponentProps } from '@reach/router'
import React from 'react'

interface IAboutProps extends RouteComponentProps {
  source?: string;
}

const About: React.FC<IAboutProps> = props => {
  return (
    <div className="about">
      <p>About page</p>
      <p>{props.source}</p>
    </div>
  )
}

export default About
