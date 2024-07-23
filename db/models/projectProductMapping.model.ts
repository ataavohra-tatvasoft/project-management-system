import { Table, Column, DataType, Model, ForeignKey } from 'sequelize-typescript'
import {
  IProjectProductMappingAttributes,
  IProjectProductMappingCreationAttributes
} from '../../interfaces'
import { Project } from './project.model'
import { Product } from './product.model'

@Table({ timestamps: true, tableName: 'project_product_mappings' })
export class ProjectProductMapping extends Model<
  IProjectProductMappingAttributes,
  IProjectProductMappingCreationAttributes
> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  })
  id!: number

  @ForeignKey(() => Project)
  @Column({
    type: DataType.INTEGER,
    allowNull: false
  })
  projectId!: number

  @ForeignKey(() => Product)
  @Column({
    type: DataType.INTEGER,
    allowNull: false
  })
  productId!: number
}
