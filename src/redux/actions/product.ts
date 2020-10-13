import { Dispatch } from 'redux'
import axios from 'axios'

import {
  GET_ALL_PRODUCTS,
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  ProductActions,
  Product,
} from '../../types'

export function getAllProducts(products: Product[]): ProductActions {
  return {
    type: GET_ALL_PRODUCTS,
    payload: {
      products,
    },
  }
}

export function addProduct(product: Product): ProductActions {
  return {
    type: ADD_PRODUCT,
    payload: {
      product,
    },
  }
}

export function removeProduct(product: Product): ProductActions {
  return {
    type: REMOVE_PRODUCT,
    payload: {
      product,
    },
  }
}

// Async action processed by redux-thunk middleware
export function fetchProduct(productId: string) {
  return async (dispatch: Dispatch) => {
    const resp = await fetch(`products/${productId}`)
    const product = await resp.json()
    dispatch(addProduct(product))
  }
}

// Async action processed by redux-thunk middleware
export function fetchProducts() {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios
        .get(`http://localhost:3000/api/v1/products/`)
      // handle success
      dispatch(getAllProducts(response.data))
    } catch (error) {
      // handle error
      console.log(error)
    }
  }
}
