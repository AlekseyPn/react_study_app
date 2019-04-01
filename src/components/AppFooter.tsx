import React from 'react'
import '../styles/components/AppFooter.css'

interface IAppFooterProps {
  name: string
}

const AppFooter: React.FC<IAppFooterProps> = ({ name }) => {
  return <footer className="app-footer">
    <div className="container">
      <p className="app-footer__copyright">
        &copy; {name}
      </p>
      <div className="app-footer__social social">
        <a href="" className="social__link social__link--fb">Facebook</a>
        <a href="" className="social__link social__link--github">Github</a>
        <a href="" className="social__link social__link--telegram">Telegram</a>
      </div>
    </div>
  </footer>
}

export default AppFooter