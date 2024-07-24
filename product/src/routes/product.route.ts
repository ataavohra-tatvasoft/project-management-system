import { Router } from 'express'
import { celebrate } from 'celebrate'
import { productControllers } from '../controllers'
import { productValidations } from '../validations'
import { wrapController } from '../middlewares'

const router = Router()

router.get('/products', wrapController(productControllers.getAllProducts))
router.get(
  '/products/:id',
  celebrate(productValidations.getProductByIdSchema),
  wrapController(productControllers.getProductById)
)
router.post(
  '/products',
  celebrate(productValidations.createProductSchema),
  wrapController(productControllers.createProduct)
)
router.put(
  '/products/:id',
  celebrate(productValidations.updateProductSchema),
  wrapController(productControllers.updateProduct)
)
router.delete(
  '/products/:id',
  celebrate(productValidations.getProductByIdSchema),
  wrapController(productControllers.deleteProduct)
)

export default router
