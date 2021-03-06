import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { AppState } from '../../types'
import { getUserWithItemsPopulate } from '../../redux/actions/user'
import {
  fetchProducts,
  fetchProductsByNameSuccess,
  fetchProductsByCategorySuccess,
} from '../../redux/actions/product'
import shoppingCart from '../../icons/shopping-cart.svg'
import userProfile from '../../icons/user-profile.svg'
import hambugerMenu from '../../icons/icons8-menu.svg'
import './header.scss'

const Header = () => {
  const baseUrl =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3001/'
      : 'https://ecommerce-app-client.herokuapp.com/'
  const [searchTerm, setSearchTerm] = useState('')
  // the state of the mobile nav bar
  const [isNavOpen, setIsNavOpen] = useState(false)
  const dispatch = useDispatch()
  const user = useSelector((state: AppState) => state.auth.user)
  const itemsInCartLocal = useSelector(
    (state: AppState) => state.local.itemsInCart
  )
  let numberOfItemsInCartLocal = 0
  if (itemsInCartLocal) {
    itemsInCartLocal.forEach(
      (item) => (numberOfItemsInCartLocal += item.quantity)
    )
  }
  const isLoggedIn = useSelector((state: AppState) => state.auth.isLoggedIn)
  let itemsInCart = user?.itemsInCart
  let numberOfItemsInCart = 0
  if (user?.itemsInCart) {
    user?.itemsInCart?.forEach((item) => (numberOfItemsInCart += item.quantity))
  }
  const username = user?.google
    ? user.google.name
    : user?.username
      ? user.username
      : 'account'

  // if user logged in, populate items in cart of that user
  const handleCartClick = () => {
    if (user) {
      dispatch(getUserWithItemsPopulate(user._id))
    }
  }
  const handleClickNewIn = () => {
    dispatch(fetchProducts())
    setIsNavOpen(!isNavOpen)
  }
  const handleClickWomen = () => {
    dispatch(fetchProductsByCategorySuccess('women'))
    setIsNavOpen(!isNavOpen)
  }
  const handleClickMen = () => {
    dispatch(fetchProductsByCategorySuccess('men'))
    setIsNavOpen(!isNavOpen)
  }
  const handleClickKids = () => {
    dispatch(fetchProductsByCategorySuccess('kids'))
    setIsNavOpen(!isNavOpen)
  }
  // handle Input change
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
  }
  const handleSearch = () => {
    dispatch(fetchProductsByNameSuccess(searchTerm))
  }
  // handle the hamburger menu button click event
  const handleMenuBtnClick = () => {
    setIsNavOpen(!isNavOpen)
  }
  return (
    <div className="header">
      <div className="header__title">
        <a href={baseUrl}>AMOUR</a>
      </div>
      <div className={`nav nav--${isNavOpen}`}>
        <ul className="nav__list">
          <li className="nav__item">
            <NavLink
              to="/newin"
              activeClassName="nav__item__link--active"
              onClick={handleClickNewIn}
            >
              NEW IN
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink
              to="/women"
              activeClassName="nav__item__link--active"
              onClick={handleClickWomen}
            >
              WOMEN
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink
              to="/men"
              activeClassName="nav__item__link--active"
              onClick={handleClickMen}
            >
              MEN
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink
              to="/kids"
              activeClassName="nav__item__link--active"
              onClick={handleClickKids}
            >
              KIDS
            </NavLink>
          </li>
          <li className="nav__item">
            <Link to="#">ABOUT US</Link>
          </li>
        </ul>
      </div>
      <div className="tool">
        <div className="tool__search-container">
          <input
            type="text"
            placeholder="Search.."
            name="search"
            onChange={handleChange}
          />
          <button onClick={handleSearch}>
            <div className="tool__search-container__text">search</div>
          </button>
        </div>
        <Link
          to={isLoggedIn ? `/user/${user?._id}` : '/auth'}
          className="tool__link"
        >
          <img
            src={userProfile}
            className="tool__link__img tool__link__img--user"
            alt="user icon"
          />
          <div className="tool__link__text">{username}</div>
        </Link>
        <Link
          to="/checkout/cart"
          className="tool__link"
          onClick={handleCartClick}
        >
          <span className="tool__link__badge">
            {isLoggedIn
              ? itemsInCart
                ? numberOfItemsInCart
                : '0'
              : numberOfItemsInCartLocal}
          </span>
          <img
            src={shoppingCart}
            className="tool__link__img"
            alt="shopping cart"
          />
          <div className="tool__link__text">cart</div>
        </Link>
        <button className="tool__button" onClick={handleMenuBtnClick}>
          <img src={hambugerMenu} className="tool__menu" alt="Menu icon" />
        </button>
      </div>
    </div>
  )
}

export default Header
