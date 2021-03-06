import React from 'react'
import './footer.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faLinkedinIn,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons'
const Footer = () => {
  return (
    <div className="footer">
      <p className="footer__intro">FINLAND</p>
      <p className="footer__intro">
        © 2020 AMOUR <small>All rights reserved</small>
      </p>
      <ul className="footer__menu">
        <li className="footer__menu__icon">
          <FontAwesomeIcon icon={faInstagram} aria-hidden="true" />
        </li>
        <li>
          <FontAwesomeIcon icon={faFacebook} aria-hidden="true" />
        </li>
        <li>
          <FontAwesomeIcon icon={faLinkedinIn} aria-hidden="true" />
        </li>
      </ul>
    </div>
  )
}

export default Footer
