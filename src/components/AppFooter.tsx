import React from 'react'
import spriteSocial from '../images/sprite_social.svg'
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
        <a href="https://www.facebook.com/aleksey.fers" className="social__link social__link--fb"><svg><use xlinkHref={spriteSocial + "#facebook"}/></svg>Facebook</a>
        <a href="https://github.com/AlekseyPn" className="social__link social__link--github"><svg><use xlinkHref={spriteSocial + "#github"}/></svg>Github</a>
        <a href="https://t.me/fargustian" className="social__link social__link--telegram"><svg><use xlinkHref={spriteSocial + "#telegram"}/></svg>Telegram</a>
      </div>
    </div>
  </footer>
}

export default AppFooter