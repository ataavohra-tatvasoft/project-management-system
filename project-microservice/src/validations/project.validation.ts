import Joi from 'joi'

// Schema for `getProjectById` and `deleteProject`
const getProjectByIdSchema = {
  params: Joi.object().keys({
    id: Joi.number().integer().positive().required()
  })
}

const createProjectSchema = {
  body: Joi.object({
    projectName: Joi.string().min(1).max(100).required(),
    title: Joi.string().min(3).max(20).required(),
    description: Joi.string().max(250).required()
  })
}

const updateProjectSchema = {
  params: Joi.object().keys({
    id: Joi.number().integer().positive().required()
  }),
  body: Joi.object({
    projectName: Joi.string().min(1).max(100),
    title: Joi.string().min(3).max(20),
    description: Joi.string().max(250)
  })
}

const addProductToProjectSchema = {
  body: Joi.object({
    projectId: Joi.number().integer().positive().required(),
    productId: Joi.number().integer().positive().required()
  })
}

const removeProductFromProjectSchema = {
  body: Joi.object({
    projectId: Joi.number().integer().positive().required(),
    productId: Joi.number().integer().positive().required()
  })
}

export default {
  getProjectByIdSchema,
  createProjectSchema,
  updateProjectSchema,
  addProductToProjectSchema,
  removeProductFromProjectSchema
}
