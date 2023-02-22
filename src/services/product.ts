import Product from '@models/productModel'

/**
 * Stores a new product into the database.
 * @param {Object} product object to create.
 * @throws {Error} If the product is not provided.
 */

export const createProduct = async (product) => {
  if (!product) {
    throw new Error('Missing product')
  }

  await Product.create(product)
}

export const getProduct = async () => {
  return await Product.findOne()
}
