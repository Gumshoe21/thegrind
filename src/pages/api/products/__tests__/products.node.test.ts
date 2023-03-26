/**
 * @jest-environment node
 */

import mongoose from 'mongoose'
import { ObjectId } from 'mongodb'
import { connectIMS, closeDatabase, clearDatabase } from '@src/mongoMemoryServer'
import { createProduct, getProduct } from '@src/services/product'
import Product from '@models/productModel'

beforeEach(async () => {
  await Product.create(newProduct)
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

describe('/api/product', () => {
  /**
   * Tests that a valid product can be created without throwing any errors.
   */

  it('Can be created successfully.', async () => {
    expect(async () => await createProduct(newProduct)).not.toThrow()
  })
  /**
   * Tests that a valid product can be retrieved without throwing any errors.
   */

  it('Can be retrieved successfully.', async () => {
    const product = await getProduct()
    expect(product).toBeTruthy()
    expect(product).toHaveProperty('pId')
  })
})

const newProduct = {
  pId: '32093',
  name: 'Cookies',
  variants: [
    {
      name: 'Dozen',
      price: '$12',
    },
    {
      name: 'Thirty',
      price: '$22',
    },
  ],
  category: 'cookies',
  imageSrc: 'url',
  iamgeAlt: 'alt',
}
