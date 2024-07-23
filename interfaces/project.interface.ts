import { Optional } from 'sequelize'

export interface IProjectAttributes {
  projectId: number
  projectName: string
  title: string
  description: string
  createdAt: Date
  updatedAt: Date
}
export interface IProjectCreationAttributes
  extends Optional<IProjectAttributes, 'projectId' | 'createdAt' | 'updatedAt'> {}
