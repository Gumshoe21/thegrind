/*
import { handler as getCart } from '@pages/api/carts/getCart'

describe('api/carts/getCart', () => {
  it('should return cart for user and with status of active', async () => {
    const mockReq = {
      user: '123',
      status: 'active',
    }
  })
})
*/

import mongoose from 'mongoose'
import { ObjectId } from 'mongodb'
import { connectIMS, closeDatabase, clearDatabase } from './../db-handler'
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
  it('can be created correctly', async () => {
    expect(async () => await createCart(cartComplete)).not.toThrow()
  })
})

/**
 * Complete product example.
 */

const cartComplete = {
  status: '123',
  user: new ObjectId(),
}
