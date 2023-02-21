import Cart from '@models/cartModel'

/**
 * Stores a new product into the database.
 * @param {Object} product product object to create.
 * @throws {Error} If the product is not provided.
 */
export const createCart = async (cart) => {
  if (!cart) {
    throw new Error('Missing cart')
  }

  await Cart.create(cart)
}
