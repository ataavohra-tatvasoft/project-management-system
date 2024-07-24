import { Model, DataTypes, Sequelize, ModelAttributes, InitOptions } from 'sequelize'
import {
  IProjectProductMappingAttributes,
  IProjectProductMappingCreationAttributes
} from '../../interfaces'
import { Project } from './project.model'
import { Product } from './product.model'

export class ProjectProductMapping extends Model<
  IProjectProductMappingAttributes,
  IProjectProductMappingCreationAttributes
> {
  public id!: number
  public projectId!: number
  public productId!: number

  public readonly createdAt!: Date
  public readonly updatedAt!: Date

  static initialize(sequelize: Sequelize) {
    const attributes: ModelAttributes = {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      projectId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: Project,
          key: 'projectId'
        }
      },
      productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: Product,
          key: 'productId'
        }
      }
    }

    const options: InitOptions<ProjectProductMapping> = {
      sequelize,
      tableName: 'project_product_mappings',
      timestamps: true,
      indexes: [
        {
          unique: true,
          fields: ['projectId', 'productId']
        }
      ]
    }

    ProjectProductMapping.init(attributes, options)
  }
}
