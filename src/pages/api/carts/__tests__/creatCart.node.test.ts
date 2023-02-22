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
   * Tests that a valid cart can be created without throwing any errors.
   */
  it('Can be created successfully.', async () => {
    expect(async () => await createCart(newCart)).not.toThrow()
  })

  /**
   * Tests that a valid cart can be retrieved without throwing any errors.
   */
  it('Can be retrieved successfully.', async () => {
    const cart = await getCart()
    expect(cart).toBeTruthy()
    expect(cart).toHaveProperty('status')
  })
})

/**
 * New cart example.
 */

const newCart = {
  status: '123',
  user: new ObjectId(),
}
