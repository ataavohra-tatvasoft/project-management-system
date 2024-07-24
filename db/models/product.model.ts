import { Model, DataTypes, Sequelize, ModelAttributes, InitOptions } from 'sequelize'
import { IProductAttributes, IProductCreationAttributes } from '../../interfaces'
import { ProjectProductMapping } from './projectProductMapping.model'
import { Project } from './project.model'

export class Product extends Model<IProductAttributes, IProductCreationAttributes> {
  public productId!: number
  public productName!: string
  public quantity!: number
  public description!: string
  public projects!: Project[]

  public readonly createdAt!: Date
  public readonly updatedAt!: Date

  static initialize(sequelize: Sequelize) {
    const attributes: ModelAttributes = {
      productId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      productName: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          min: 0
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

    const options: InitOptions<Product> = {
      sequelize,
      tableName: 'products',
      timestamps: true
    }

    Product.init(attributes, options)
  }

  static associate() {
    Product.belongsToMany(Project, {
      through: ProjectProductMapping,
      foreignKey: 'productId',
      otherKey: 'projectId'
    })
  }
}
