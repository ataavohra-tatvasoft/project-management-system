import { Sequelize } from 'sequelize-typescript'
import { messageConstant } from '../constants'
import { loggerUtils } from '../utils'
import { envConfig } from '.'
import { httpStatusConstant } from '../constants'
import { HttpError } from '../libs'
import { ProjectProductMapping, Project, Product } from '../../../db/models'

const connectToDatabase = async () => {
  try {
    const sequelize = new Sequelize({
      database: String(envConfig.dbName),
      host: String(envConfig.serverHost),
      dialect: 'mysql',
      username: String(envConfig.dbUser),
      password: String(envConfig.dbPassword),
      storage: ':memory:',
      logging: false
    })

    // Initialize models
    Project.initialize(sequelize)
    Product.initialize(sequelize)
    ProjectProductMapping.initialize(sequelize)

    // Set up associations
    Project.associate()
    Product.associate()

    const connection: void = await sequelize.authenticate()

    loggerUtils.logger.info('Database connection successful')

    return connection
  } catch (error) {
    console.log(error)
    throw new HttpError(messageConstant.CONNECTION_ERROR, httpStatusConstant.INTERNAL_SERVER_ERROR)
  }
}

export default { connectToDatabase }
