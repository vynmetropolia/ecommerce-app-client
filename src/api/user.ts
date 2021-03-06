import axios from 'axios'

const baseUrl =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000/api/v1'
    : 'https://dcd-node-deploy.herokuapp.com/api/v1'

const getUserWithItemsInCart = async (userId: string) => {
  try {
    return await axios.get(baseUrl + `/users/itemsInCart/${userId}`, {
      withCredentials: true,
    })
  } catch (error) {
    return error
  }
}

const updateProfile = async (
  userId: string,
  email: string,
  firstName?: string,
  lastName?: string
) => {
  try {
    return await axios.patch(
      baseUrl + `/users/${userId}`,
      {
        email,
        firstName,
        lastName,
      },
      { withCredentials: true }
    )
  } catch (error) {
    return error
  }
}

const updatePassword = async (
  userId: string,
  oldPassword: string,
  newPassword?: string
) => {
  try {
    return await axios.patch(
      baseUrl + `/users/change-password/${userId}`,
      {
        oldPassword,
        newPassword,
      },
      { withCredentials: true }
    )
  } catch (error) {
    return error
  }
}

const addItemToCart = async (userId: string, productId: string) => {
  try {
    return await axios.patch(
      baseUrl + `/users/addToCart/${userId}`,
      {
        productId,
      },
      { withCredentials: true }
    )
  } catch (error) {
    return error
  }
}

const removeItemFromCart = async (userId: string, productId: string) => {
  try {
    return await axios.patch(
      baseUrl + `/users/removeFromCart/${userId}`,
      {
        productId,
      },
      { withCredentials: true }
    )
  } catch (error) {
    return error
  }
}

const decreaseProductQuantityFromCart = async (
  userId: string,
  productId: string
) => {
  try {
    return await axios.patch(
      baseUrl + `/users/decreaseProductQuantityFromCart/${userId}`,
      {
        productId,
      },
      { withCredentials: true }
    )
  } catch (error) {
    return error
  }
}

export {
  updateProfile,
  updatePassword,
  addItemToCart,
  decreaseProductQuantityFromCart,
  removeItemFromCart,
  getUserWithItemsInCart,
}
