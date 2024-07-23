/* eslint-disable no-undef */
import dotenv from 'dotenv'

dotenv.config()

export default {
  dbUser: process.env.DB_URL,
  dbPassword: process.env.DB_PASSWORD,
  dbName: process.env.DB_NAME,
  serverHost: process.env.SERVER_HOST,
  serverPort: process.env.SERVER_PORT,
  serverBaserUrl: process.env.SERVER_BASE_URL,
  saltRounds: process.env.SALT_ROUNDS
}
