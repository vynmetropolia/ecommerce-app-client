import axios from 'axios'

const baseUrl =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000/api/v1'
    : 'https://dcd-node-deploy.herokuapp.com/api/v1'

const fetchAllProducts = async () => {
  try {
    const res = await axios.get(`${baseUrl}/products/`, {
      withCredentials: true,
    })
    return res
  } catch (error) {
    return error
  }
}
const findProductByCategory = async (productCategory: string) => {
  try {
    const res = await axios.get(
      `${baseUrl}/products/findByCategory/${productCategory}`,
      {
        withCredentials: true,
      }
    )
    return res
  } catch (error) {
    return error
  }
}

const createProduct = async (
  name: string,
  price: number,
  images: string[],
  description: string,
  category: string,
  variants: string[],
  size: string | number
) => {
  try {
    return await axios.post(
      baseUrl + '/products/',
      {
        name,
        price,
        images,
        description,
        category,
        variants,
        size,
      },
      { withCredentials: true }
    )
  } catch (error) {
    return error
  }
}

const updateProduct = async (
  productId: string,
  name: string,
  price: number,
  images: string[],
  description: string,
  category: string,
  variants: string[],
  size: string | number
) => {
  try {
    return await axios.patch(
      baseUrl + `/products/${productId}`,
      {
        name,
        price,
        images,
        description,
        category,
        variants,
        size,
      },
      { withCredentials: true }
    )
  } catch (error) {
    return error
  }
}

const deleteProduct = async (productId: string) => {
  try {
    return await axios.delete(baseUrl + `/products/${productId}`, {
      withCredentials: true,
    })
  } catch (error) {
    return error
  }
}

export {
  fetchAllProducts,
  createProduct,
  findProductByCategory,
  updateProduct,
  deleteProduct,
}
