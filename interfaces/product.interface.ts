import { Optional } from 'sequelize'

export interface IProductAttributes {
  productId: number
  productName: string
  quantity: number
  description: string
  createdAt: Date
  updatedAt: Date
}
export interface IProductCreationAttributes
  extends Optional<IProductAttributes, 'productId' | 'createdAt' | 'updatedAt'> {}
