import Joi from 'joi'

// Schema for `getProductById` and `deleteProduct`
const getProductByIdSchema = {
  params: Joi.object().keys({
    id: Joi.number().integer().positive().required()
  })
}
const createProductSchema = {
  body: Joi.object({
    productName: Joi.string().min(1).max(100).required(),
    quantity: Joi.number().integer().min(0).required(),
    description: Joi.string().max(250).required()
  })
}

const updateProductSchema = {
  body: Joi.object({
    productName: Joi.string().min(1).max(100),
    quantity: Joi.number().integer().min(0),
    description: Joi.string().max(250)
  })
}

export default {
  getProductByIdSchema,
  createProductSchema,
  updateProductSchema
}
