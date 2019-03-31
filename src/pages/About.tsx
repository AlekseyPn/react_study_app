import { RouteComponentProps } from '@reach/router'
import React from 'react'

const About: React.FC<RouteComponentProps> = () => {
  return (
    <div className="about wrapper">
      <h2>Habr</h2>
      <p>Habr is the largest resource for IT professionals in Europe, that is being published by "TM". Since the appearance in 2006, Habr has been transformed from a small industry site into a global professional site, which is visited monthly by more than 8 million unique users.</p>
      <p>Habr is equally interesting to developers and engineers, administrators and testers, designers, analysts and copywriters, as well as all those for whom "IT" is not just two letters of an alphabet.</p>
    </div>
  )
}

export default About
