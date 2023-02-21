import mongoose from 'mongoose'
import { MongoMemoryServer } from 'mongodb-memory-server'
import { version } from 'process'
import { TextEncoder, TextDecoder } from 'text-encoding-utf-8'

let mongod
/**
 * Connect to the in-memory database.
 */
export const connectIMS = async () => {
  mongod = await MongoMemoryServer.create()
  const uri = mongod.getUri()

  const mongooseOpts = {
    useNewUrlParser: true,
  }

  if (version.startsWith('v16') || (version.startsWith('v14') && version.endsWith('-nightly'))) {
    global.TextEncoder = TextEncoder
  }
  await mongoose.connect(uri, mongooseOpts)
}

/**
 * Drop database, close the connection and stop mongod.
 */
export const closeDatabase = async () => {
  await mongoose.connection.dropDatabase()
  await mongoose.connection.close()
  await mongod.stop()
}

/**
 * Remove all the data for all db collections.
 */
export const clearDatabase = async () => {
  const collections = mongoose.connection.collections

  for (const key in collections) {
    const collection = collections[key]
    await collection.deleteMany()
  }
}

export default {
  connectIMS,
  closeDatabase,
  clearDatabase,
}
