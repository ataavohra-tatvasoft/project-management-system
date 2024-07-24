import { Request, Response } from 'express'
import { Product } from '../../../db/models'
import { responseHandlerUtils } from '../utils'
import { httpErrorMessageConstant, httpStatusConstant, messageConstant } from '../constants'
import { HttpError } from '../libs'

const getAllProducts = async (req: Request, res: Response) => {
  const products = await Product.findAll()
  if (!products) {
    throw new HttpError(
      messageConstant.ERROR_FETCHING_PRODUCTS,
      httpStatusConstant.INTERNAL_SERVER_ERROR
    )
  }
  return responseHandlerUtils.responseHandler(res, {
    statusCode: httpStatusConstant.OK,
    message: httpErrorMessageConstant.SUCCESSFUL,
    data: products
  })
}

const getProductById = async (req: Request, res: Response) => {
  const { id } = req.params

  const product = await Product.findByPk(id)
  if (!product) {
    throw new HttpError(messageConstant.PRODUCT_NOT_FOUND, httpStatusConstant.NOT_FOUND)
  }
  return responseHandlerUtils.responseHandler(res, {
    statusCode: httpStatusConstant.OK,
    message: httpErrorMessageConstant.SUCCESSFUL,
    data: product
  })
}

const createProduct = async (req: Request, res: Response) => {
  const { productName, quantity, description } = req.body
  const product = await Product.create({ productName, quantity, description })
  return responseHandlerUtils.responseHandler(res, {
    statusCode: httpStatusConstant.CREATED,
    message: httpErrorMessageConstant.SUCCESSFUL,
    data: product
  })
}

const updateProduct = async (req: Request, res: Response) => {
  const { id } = req.params

  const { productName, quantity, description } = req.body
  const updated = await Product.update(
    { productName, quantity, description },
    { where: { productId: id } }
  )
  if (!updated) {
    throw new HttpError(messageConstant.PRODUCT_NOT_FOUND, httpStatusConstant.NOT_FOUND)
  }
  const updatedProduct = await Product.findByPk(id)
  return responseHandlerUtils.responseHandler(res, {
    statusCode: httpStatusConstant.OK,
    message: httpErrorMessageConstant.SUCCESSFUL,
    data: updatedProduct
  })
}

const deleteProduct = async (req: Request, res: Response) => {
  const { id } = req.params

  const deleted = await Product.destroy({ where: { productId: id } })
  if (!deleted) {
    throw new HttpError(messageConstant.PRODUCT_NOT_FOUND, httpStatusConstant.NOT_FOUND)
  }
  return responseHandlerUtils.responseHandler(res, {
    statusCode: httpStatusConstant.OK,
    message: httpErrorMessageConstant.SUCCESSFUL
  })
}

export default {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
}
