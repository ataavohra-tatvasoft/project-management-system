import { Request, Response } from 'express'
import { Product, Project, ProjectProductMapping } from '../../../db/models'
import { responseHandlerUtils } from '../utils'
import { httpErrorMessageConstant, httpStatusConstant, messageConstant } from '../constants'
import { HttpError } from '../libs'

const getAllProjects = async (req: Request, res: Response) => {
  const projects = await Project.findAll({
    include: [Product]
  })
  if (!projects) {
    throw new HttpError(
      messageConstant.ERROR_FETCHING_PROJECTS,
      httpStatusConstant.INTERNAL_SERVER_ERROR
    )
  }
  return responseHandlerUtils.responseHandler(res, {
    statusCode: httpStatusConstant.OK,
    message: httpErrorMessageConstant.SUCCESSFUL,
    data: projects
  })
}

const getProjectById = async (req: Request, res: Response) => {
  const { id } = req.params

  const project = await Project.findByPk(id, { include: [Product] })
  if (!project) {
    throw new HttpError(messageConstant.PROJECT_NOT_FOUND, httpStatusConstant.NOT_FOUND)
  }
  return responseHandlerUtils.responseHandler(res, {
    statusCode: httpStatusConstant.OK,
    message: httpErrorMessageConstant.SUCCESSFUL,
    data: project
  })
}

const createProject = async (req: Request, res: Response) => {
  const { projectName, title, description } = req.body
  const project = await Project.create({ projectName, title, description })
  return responseHandlerUtils.responseHandler(res, {
    statusCode: httpStatusConstant.CREATED,
    message: httpErrorMessageConstant.SUCCESSFUL,
    data: project
  })
}

const updateProject = async (req: Request, res: Response) => {
  const { id } = req.params

  const { projectName, title, description } = req.body
  const updated = await Project.update(
    { projectName, title, description },
    { where: { projectId: id } }
  )
  if (!updated) {
    throw new HttpError(messageConstant.PROJECT_NOT_FOUND, httpStatusConstant.NOT_FOUND)
  }
  const updatedProject = await Project.findByPk(id)
  return responseHandlerUtils.responseHandler(res, {
    statusCode: httpStatusConstant.OK,
    message: httpErrorMessageConstant.SUCCESSFUL,
    data: updatedProject
  })
}

const deleteProject = async (req: Request, res: Response) => {
  const { id } = req.params

  const deleted = await Project.destroy({ where: { projectId: id } })
  if (!deleted) {
    throw new HttpError(messageConstant.PROJECT_NOT_FOUND, httpStatusConstant.NOT_FOUND)
  }
  return responseHandlerUtils.responseHandler(res, {
    statusCode: httpStatusConstant.NO_CONTENT,
    message: httpErrorMessageConstant.SUCCESSFUL
  })
}

const addProductToProject = async (req: Request, res: Response) => {
  const { projectId, productId } = req.body

  const mapping = await ProjectProductMapping.create({ projectId, productId })
  return responseHandlerUtils.responseHandler(res, {
    statusCode: httpStatusConstant.CREATED,
    message: messageConstant.PRODUCT_ADDED_TO_PROJECT,
    data: mapping
  })
}

const removeProductFromProject = async (req: Request, res: Response) => {
  const { projectId, productId } = req.body

  const deleted = await ProjectProductMapping.destroy({ where: { projectId, productId } })
  if (!deleted) {
    throw new HttpError(messageConstant.PRODUCT_NOT_FOUND_IN_PROJECT, httpStatusConstant.NOT_FOUND)
  }
  return responseHandlerUtils.responseHandler(res, {
    statusCode: httpStatusConstant.OK,
    message: messageConstant.PRODUCT_REMOVED_FROM_PROJECT
  })
}

export default {
  getAllProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
  addProductToProject,
  removeProductFromProject
}
