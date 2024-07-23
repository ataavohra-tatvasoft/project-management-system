import { Sequelize } from 'sequelize-typescript'
import { messageConstant } from '../constants'
import { loggerUtils } from '../utils'
import { envConfig } from '../configs'
import { httpStatusConstant } from '../constants'
import { HttpError } from '../libs'

const connectToDatabase = async () => {
  try {
    const sequelize = new Sequelize({
      database: 'project-management-system',
      host: 'localhost',
      dialect: 'mysql',
      username: envConfig.dbUser,
      password: envConfig.dbPassword,
      storage: ':memory:',
      models: []
    })

    const connection: Promise<void> = sequelize.authenticate()

    /** Connection to Database */
    connection
      .then(() => {
        console.log('Database connection successful')
      })
      .catch((error: Error) => {
        console.log('Error Occurred =>', error)
      })

    await sequelize.authenticate()

    return connection
  } catch (error) {
    loggerUtils.logger.error(error)
    throw new HttpError(messageConstant.CONNECTION_ERROR, httpStatusConstant.INTERNAL_SERVER_ERROR)
  }
}

export default { connectToDatabase }
