import { Optional } from 'sequelize'

export interface IProjectProductMappingAttributes {
  id: number
  projectId: number
  productId: number
  createdAt: Date
  updatedAt: Date
}
export interface IProjectProductMappingCreationAttributes
  extends Optional<IProjectProductMappingAttributes, 'id' | 'createdAt' | 'updatedAt'> {}
