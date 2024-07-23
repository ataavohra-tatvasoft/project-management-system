import { Table, Column, DataType, Model } from 'sequelize-typescript'
import {
  IProjectProductMappingAttributes,
  IProjectProductMappingCreationAttributes
} from '../../interfaces'
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
  id: number

  @Column({
    type: DataType.INTEGER,
    allowNull: false
  })
  projectId: number

  @Column({
    type: DataType.INTEGER,
    allowNull: false
  })
  productId: number

  // Omitted createdAt and updatedAt for brevity (already defined by timestamps: true)
}
