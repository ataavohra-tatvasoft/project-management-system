import { Sequelize } from 'sequelize-typescript'
import { messageConstant } from '../constants'
import { loggerUtils } from '../utils'
import { envConfig } from '.'
import { httpStatusConstant } from '../constants'
import { HttpError } from '../libs'

const connectToDatabase = async () => {
  try {
    const sequelize = new Sequelize({
      database: 'project-management-system',
      host: 'localhost',
      dialect: 'mysql',
      username: String(envConfig.dbUser),
      password: String(envConfig.dbPassword),
      storage: ':memory:',
      models: []
    })

    const connection: void = await sequelize.authenticate()

    loggerUtils.logger.info('Database connection successful')

    return connection
  } catch (error) {
    console.log(error)
    throw new HttpError(messageConstant.CONNECTION_ERROR, httpStatusConstant.INTERNAL_SERVER_ERROR)
  }
}

export default { connectToDatabase }