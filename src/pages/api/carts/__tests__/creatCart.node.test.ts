/**
 * @jest-environment node
 */

import mongoose from 'mongoose'
import { ObjectId } from 'mongodb'
import { connectIMS, closeDatabase, clearDatabase } from '@src/mongoMemoryServer'
import { createCart } from '@src/services/cart'
import cartModel from '@models/cartModel'

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

describe('cart', () => {
  /**
   * Tests that a valid product can be created through the productService without throwing any errors.
   */
  it('Can be created successfully.', async () => {
    expect(async () => await createCart(newCart)).not.toThrow()
  })
})

/**
 * New cart example.
 */

const newCart = {
  status: '123',
  user: new ObjectId(),
}
