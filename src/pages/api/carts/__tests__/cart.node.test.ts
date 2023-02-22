/**
 * @jest-environment node
 */

import mongoose from 'mongoose'
import { ObjectId } from 'mongodb'
import { connectIMS, closeDatabase, clearDatabase } from '@src/mongoMemoryServer'
import { createCart, getCart } from '@src/services/cart'
import Cart from '@models/cartModel'
/**
 * Create a new cart before each test.
 *
 */
beforeEach(async () => {
  await Cart.create({ user: new ObjectId(), status: 'open' })
})
/**
 * Connect to a new in-memory database before running any tests.
 */
beforeAll(async () => await connectIMS())

/**
 * Clear all test data after every test.
 */
afterEach(async () => await clearDatabase())

/**
 * Remove and close the db and server.
 */
afterAll(async () => await closeDatabase())

/**
 * Product test suite.
 */

describe('/api/cart', () => {
  /**
   * /api/carts/createCart
   * Tests that a valid cart can be created without throwing errors.
   */
  it('Can be created successfully.', async () => {
    expect(async () => await createCart(newCart)).not.toThrow()
  })

  /**
   * /api/carts/getCart
   * Tests that a valid cart can be retrieved without throwing errors.
   */
  it('Can be retrieved successfully.', async () => {
    const cart = await getCart()
    expect(cart).toBeTruthy()
    expect(cart).toHaveProperty('status')
  })

  /**
   * /api/carts/updateCart
   * Tests that a valid cart can be updated without throwing errors.
   */
  it('Can be updated succesfully.', async () => {
    let userId = new ObjectId()
    let newQuantity = 2
    let variant = '12'
    let name = 'Chocolate Chip Cookies'
    let price = '14'

    const newCart = await createCart({
      user: userId,
      status: 'active',
      items: [
        {
          name,
          quantity: 1,
          variant,
          price,
        },
      ],
    })

    let userCart = await Cart.findOne({ user: userId, status: 'active' })
    let itemIndex = userCart.items.findIndex((i) => i.name === name && i.variant === variant)

    let cartItem = userCart.items[itemIndex]

    cartItem.quantity = newQuantity

    userCart = await userCart.save()

    expect(userCart.items[itemIndex].quantity).toEqual(2)
  })
})

/**
 * New cart example.
 */

const updateData = {
  selectedQuantity: 2,
}
const newCart = {
  status: '123',
  user: new ObjectId(),
}
