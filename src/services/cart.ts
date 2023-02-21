/**
 * @jest-environment node
 */
import Cart from '@models/cartModel'

/**
 * Stores a new cart into the database.
 * @param {Object} cart object to create.
 * @throws {Error} If the cart is not provided.
 */

export const createCart = async (cart) => {
  if (!cart) {
    throw new Error('Missing cart')
  }

  await Cart.create(cart)
}
