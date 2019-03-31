import { RouteComponentProps } from '@reach/router'
import React from 'react'
import "../styles/pages/Home.css"

const Home: React.FC<RouteComponentProps> = () => {
  return (
    <section className="app-home wrapper">
      <h2 className="app-home__title">Welcome to My study web site</h2>
      <article className="app-home__content">
        <p>
          This site has been developed for educational purposes. On it, I practiced the skills of developing simple React applications with a strict type system (Typesript).
        </p>
        <p>Also in this application a simple authorization system on the client is implemented, if you try to go to the profile section, you will be sent to the authorization form.</p>
        <p>What I learned:</p>
        <ul>
          <li>Develop simple react app with redux</li>
          <li>Work with Typescript on base level</li>
          <li>Write tests for react apps</li>
        </ul>
        <p>Link on repo: <a href="https://github.com/AlekseyPn/react_study_app">React study app</a></p>
      </article>
    </section>
  )
}

export default Home
