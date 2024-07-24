import { Model, DataTypes, Sequelize, ModelAttributes, InitOptions } from 'sequelize'
import { IProjectAttributes, IProjectCreationAttributes } from '../../interfaces'
import { ProjectProductMapping } from './projectProductMapping.model'
import { Product } from './product.model'

export class Project extends Model<IProjectAttributes, IProjectCreationAttributes> {
  public projectId!: number
  public projectName!: string
  public title!: string
  public description!: string
  public products!: Product[]

  public readonly createdAt!: Date
  public readonly updatedAt!: Date
  static initialize(sequelize: Sequelize) {
    const attributes: ModelAttributes = {
      projectId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      projectName: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [3, 20]
        }
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [0, 250]
        }
      }
    }

    const options: InitOptions<Project> = {
      sequelize,
      tableName: 'projects',
      timestamps: true
    }

    Project.init(attributes, options)
  }

  static associate() {
    Project.belongsToMany(Product, {
      through: ProjectProductMapping,
      foreignKey: 'projectId',
      otherKey: 'productId'
    })
  }
}
