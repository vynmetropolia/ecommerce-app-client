import React from 'react'
import { Link } from 'react-router-dom'

import './checkoutSidebar.scss'
type CheckoutSidebarProps = {
  totalPrice: number
}
function CheckoutSidebar(props: CheckoutSidebarProps) {
  const { totalPrice } = props
  return (
    <>
      <div className="checkout-sidebar__content">
        <div className="checkout-sidebar__section">
          <h3>Products price</h3>
          <p>{totalPrice.toFixed(2)} EUR</p>
        </div>
        <div className="checkout-sidebar__section">
          <h3>Delivery</h3>
          <p>From 0.00</p>
        </div>
        <div className="checkout-sidebar__section">
          <h2>
            Total<span> (with vat)</span>
          </h2>
          <p className="checkout-sidebar__total">
            {(totalPrice * 1.01).toFixed(2)} EUR
          </p>
        </div>
      </div>
      <Link to="#" className="checkout-sidebar__link">
        Go to checkout
      </Link>
    </>
  )
}

export default CheckoutSidebar
