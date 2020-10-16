import React from 'react'
import { Link } from 'react-router-dom'

import { Product } from '../../types'
import './productCard.scss'

type ProductCard = {
  product: Product
}
function ProductCard(props: ProductCard) {
  const { product } = props
  console.log('product', product)
  return (
    <article className="product__wrapper">
      <figure>
        <Link to={`/products/${product._id}`}>
          <img
            className="product__photo"
            src={product.images[0]}
            alt={product.name}
          />
        </Link>
        <figcaption>{product.name}</figcaption>
        <section>
          <p>{product.price}</p>
        </section>
      </figure>
    </article>
  )
}

export default ProductCard