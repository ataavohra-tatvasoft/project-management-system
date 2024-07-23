import { Request, Response } from 'express'
import { Product, Project, ProjectProductMapping } from '../../../db/models'

export const getAllProjects = async (req: Request, res: Response) => {
  try {
    const projects = await Project.findAll({ include: [Product] })
    res.json(projects)
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve projects' })
  }
}

export const getProjectById = async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    const project = await Project.findByPk(id, { include: [Product] })
    if (project) {
      res.json(project)
    } else {
      res.status(404).json({ error: 'Project not found' })
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve project' })
  }
}

export const createProject = async (req: Request, res: Response) => {
  try {
    const project = await Project.create(req.body)
    res.status(201).json(project)
  } catch (error) {
    res.status(400).json({ error: 'Failed to create project' })
  }
}

export const updateProject = async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    const [updated] = await Project.update(req.body, { where: { projectId: id } })
    if (updated) {
      const updatedProject = await Project.findByPk(id, { include: [Product] })
      res.json(updatedProject)
    } else {
      res.status(404).json({ error: 'Project not found' })
    }
  } catch (error) {
    res.status(400).json({ error: 'Failed to update project' })
  }
}

export const deleteProject = async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    const deleted = await Project.destroy({ where: { projectId: id } })
    if (deleted) {
      res.status(204).end()
    } else {
      res.status(404).json({ error: 'Project not found' })
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete project' })
  }
}

export const addProductToProject = async (req: Request, res: Response) => {
  const { projectId, productId } = req.body
  try {
    await ProjectProductMapping.create({ projectId, productId })
    res.status(201).json({ message: 'Product added to project' })
  } catch (error) {
    res.status(400).json({ error: 'Failed to add product to project' })
  }
}

export const removeProductFromProject = async (req: Request, res: Response) => {
  const { projectId, productId } = req.body
  try {
    await ProjectProductMapping.destroy({ where: { projectId, productId } })
    res.status(200).json
  } catch (error) {
    res.status(400).json({ error: 'Failed to add product to project' })
  }
}
