import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { AppState } from '../../types'
import './header.scss'

const Header = () => {
  const user = useSelector((state: AppState) => state.auth.user)
  return (
    <div className="header">
      <div className="header__title">
        <Link to="/">AMOUR</Link>
      </div>
      <div className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <Link to="#">NEW IN</Link>
          </li>
          <li className="nav__item">
            <Link to="#">WOMAN</Link>
          </li>
          <li className="nav__item">
            <Link to="#">MEN</Link>
          </li>
          <li className="nav__item">
            <Link to="#">KIDS</Link>
          </li>
          <li className="nav__item">
            <Link to="#">ABOUT US</Link>
          </li>
        </ul>
      </div>
      <div className="tool">
        <div className="search-container">
          <input type="text" placeholder="Search.." name="search" />
          <button className="btn__search">
            <div className="btn__text">search</div>
          </button>
        </div>
        <Link to="/auth" className="btn">
          <button className="btn btn__account">
            <div className="btn__text">
              {user?.username ? user.username : 'account'}
            </div>
          </button>
        </Link>
        <Link to="/checkout/cart" className="btn">
          <button className="btn btn__cart">
            <div className="btn__text">cart</div>
            <span className="btn__cart__badge"></span>
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Header
